export const TRANSLATION_KEYS = [
  // nav
  "nav.how",
  "nav.features",
  "nav.access",
  "nav.signin",
  "nav.join",

  // hero
  "hero.title",
  "hero.desc1",
  "hero.desc2",
  "hero.benefit1",
  "hero.benefit2",
  "hero.benefit3",
  "hero.cta_how",
  "hero.cta_join",

  // pain
  "pain.title",
  "pain.item1",
  "pain.item2",
  "pain.item3",
  "pain.item4",
  "pain.footer",

  // how
  "how.title",
  "how.step_prefix",
  "how.step1",
  "how.step2",
  "how.step3",
  "how.step4",

  // features
  "features.title",
  "features.f1.title",
  "features.f1.desc",
  "features.f2.title",
  "features.f2.desc",
  "features.f3.title",
  "features.f3.desc",
  "features.f4.title",
  "features.f4.desc",
  "features.f5.title",
  "features.f5.desc",
  "features.f6.title",
  "features.f6.desc",

  // pricing
  "pricing.title",
  "pricing.subtitle",
  "pricing.soon",
  "pricing.monthly.label",
  "pricing.monthly.amount",
  "pricing.monthly.unit",
  "pricing.monthly.desc",
  "pricing.yearly.label",
  "pricing.yearly.amount",
  "pricing.yearly.unit",
  "pricing.yearly.desc",
  "pricing.early.label",
  "pricing.early.currency",
  "pricing.early.period",
  "pricing.early.desc",
  "pricing.disclaimer",

  // access
  "access.title",
  "access.benefit1",
  "access.benefit2",
  "access.benefit3",
  "access.benefit4",
  "access.already",
  "access.signin",
  "access.footnote",

  // waitlist
  "waitlist.submit",
  "waitlist.submitting",
  "waitlist.no_spam",
  "waitlist.success_title",
  "waitlist.success_sent_prefix",
  "waitlist.success_sent_suffix",
  "waitlist.toast_success",
  "waitlist.toast_error_default",
  "waitlist.toast_error_network",

  // footer
  "footer.rights",
  "footer.privacy",
] as const;

export type TranslationKey = (typeof TRANSLATION_KEYS)[number];
