export type Language = 'pt' | 'cn';

export interface Translation {
  nav_home: string;
  nav_features: string;
  nav_calculator: string;
  nav_login_client: string;
  nav_login_supplier: string;
  
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  
  calc_title: string;
  calc_rate_info: string;
  calc_input_yuan: string;
  calc_input_real: string;
  calc_fee_note: string;
  calc_cta_button: string;
  calc_refresh: string;
  
  features_title: string;
  feature_1_title: string;
  feature_1_desc: string;
  feature_2_title: string;
  feature_2_desc: string;
  feature_3_title: string;
  feature_3_desc: string;

  process_title: string;
  process_step_1: string;
  process_step_2: string;
  process_step_3: string;
  process_step_4: string;

  testimonials_title: string;
  testi_1_text: string;
  testi_1_author: string;
  testi_2_text: string;
  testi_2_author: string;

  faq_title: string;
  faq_1_q: string;
  faq_1_a: string;
  faq_2_q: string;
  faq_2_a: string;

  ai_title: string;
  ai_subtitle: string;
  ai_placeholder: string;
  ai_button: string;
  
  footer_about: string;
  footer_links: string;
  footer_legal: string;
  footer_contact: string;
  footer_rights: string;
}

export interface ContentMap {
  pt: Translation;
  cn: Translation;
}