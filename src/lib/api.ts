// Webhook API Configuration
const WEBHOOK_BASE_URL = 'https://webhook.jrcompliance.com';

// Lead Types
export type LeadType = 'corporate' | 'technical' | 'global';

// Request payload interface
export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  message?: string;
  page_parameters?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
  page_name?: string;
  form_name?: string;
  source?: string;
  responsible?: string;
  stage?: string;
}

// Response interface
export interface LeadResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

/**
 * Determines the lead type based on the current page URL path
 * - /approval/* -> technical
 * - /corporate/* -> corporate
 * - /ad/* -> technical (landing pages)
 * - others (contact, home, etc.) -> global
 */
export function getLeadTypeFromPath(pathname: string): LeadType {
  if (pathname.startsWith('/approval')) {
    return 'technical';
  }
  if (pathname.startsWith('/corporate')) {
    return 'corporate';
  }
  if (pathname.startsWith('/ad')) {
    return 'technical';
  }
  return 'global';
}

/**
 * Extracts UTM parameters from URL search params
 */
export function getUtmParameters(): LeadPayload['page_parameters'] {
  if (typeof window === 'undefined') return {};
  
  const searchParams = new URLSearchParams(window.location.search);
  const utmParams: LeadPayload['page_parameters'] = {};
  
  const utmSource = searchParams.get('utm_source');
  const utmMedium = searchParams.get('utm_medium');
  const utmCampaign = searchParams.get('utm_campaign');
  
  if (utmSource) utmParams.utm_source = utmSource;
  if (utmMedium) utmParams.utm_medium = utmMedium;
  if (utmCampaign) utmParams.utm_campaign = utmCampaign;
  
  return Object.keys(utmParams).length > 0 ? utmParams : undefined;
}

/**
 * Submits a lead to the webhook API
 * @param leadType - The type of lead (corporate, technical, or global)
 * @param payload - The lead data
 * @returns Promise with the API response
 */
export async function submitLead(
  leadType: LeadType,
  payload: LeadPayload
): Promise<LeadResponse> {
  const endpoint = `${WEBHOOK_BASE_URL}/${leadType}`;
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit lead');
    }
    
    return data;
  } catch (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }
}

/**
 * Convenience function to submit a lead with automatic lead type detection
 * @param formData - Form data with name, email, phone
 * @param pageName - Optional page name for tracking
 * @param message - Optional message
 */
export async function submitLeadWithAutoDetection(
  formData: { name: string; email: string; phone: string },
  pageName?: string,
  message?: string
): Promise<LeadResponse> {
  if (typeof window === 'undefined') {
    throw new Error('This function can only be called on the client side');
  }
  
  const leadType = getLeadTypeFromPath(window.location.pathname);
  const utmParams = getUtmParameters();
  
  const payload: LeadPayload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    page_name: pageName || window.location.pathname,
  };
  
  if (message) {
    payload.message = message;
  }
  
  if (utmParams) {
    payload.page_parameters = utmParams;
  }
  
  return submitLead(leadType, payload);
}

/**
 * Submit a lead from ad landing pages with full CRM metadata
 */
export async function submitAdLead(
  formData: { name: string; email: string; phone: string },
  meta: {
    form_name: string;
    source: string;
    responsible: string;
    stage: string;
    leadType: LeadType;
  },
  message?: string
): Promise<LeadResponse> {
  if (typeof window === 'undefined') {
    throw new Error('This function can only be called on the client side');
  }

  const utmParams = getUtmParameters();

  const payload: LeadPayload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    page_name: meta.form_name,
    form_name: meta.form_name,
    source: meta.source,
    responsible: meta.responsible,
    stage: meta.stage,
  };

  if (message) {
    payload.message = message;
  }

  if (utmParams) {
    payload.page_parameters = utmParams;
  }

  return submitLead(meta.leadType, payload);
}
