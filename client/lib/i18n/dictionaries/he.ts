import type { TranslationKey } from "./keys";

const he: Record<TranslationKey, string> = {
  // nav
  "nav.how": "איך זה עובד",
  "nav.features": "תכונות",
  "nav.access": "גישה",
  "nav.signin": "כניסה",
  "nav.join": "הצטרפות",

  // hero
  "hero.title": "הפסק לתכנן את היום ולהרגיש כישלון בערב",
  "hero.desc1":
    "כל בוקר תוכנית של חמש משימות, בערב רק שתיים הושלמו ויש תחושת אשמה. DTG Studio עוזר לפנות את הצבר בכמה שעות ואז לבחור מה לעשות עכשיו.",
  "hero.desc2":
    "סגרת משימה אחת — זה כבר התקדמות. לא סגרת — לא כישלון, לא היה תוכנית.",
  "hero.benefit1": "רשימת פעולות מוכנה במקום תכנון יומי",
  "hero.benefit2": "דדליינים אמיתיים בנפרד, ללא ערמת פריטים באיחור",
  "hero.benefit3": "גמישות הבחירה במקום תחושת אשמה",
  "hero.cta_how": "ראה איך זה עובד",
  "hero.cta_join": "הצטרף לרשימת ההמתנה",

  // pain
  "pain.title": "מזהה את עצמך?",
  "pain.item1":
    "תכננת חמש משימות ליום, עשית שתיים בערב, מרגיש אשמה",
  "pain.item2": "Todoist מציג 12 פריטים באיחור ואתה נמנע מלפתוח אותו",
  "pain.item3": "המציאות שוברת את התוכניות: שיחה, משימה דחופה, פגישה התארכה",
  "pain.item4": "ניסית time blocking והלוח נשבר תוך שעה",
  "pain.footer":
    "אם אתה מזהה את עצמך בלפחות שתי נקודות — אתה צריך את גמישות הבחירה.",

  // how
  "how.title": "איך זה עובד",
  "how.step_prefix": "שלב",
  "how.step1": "תיעדת מחשבה ב״דואר נכנס״ תוך 10 שניות",
  "how.step2": "עיבדת את הצבר דרך אשף העיבוד",
  "how.step3": "קיבלת הקשרים ודדליינים אמיתיים בנפרד",
  "how.step4":
    "פתחת את ההקשר הנכון וסיימת משימה אחת. או שתיים. אפילו חמש. כמה שהצלחת.",

  // features
  "features.title": "מה DTG Studio נותן לך",
  "features.f1.title": "אשף עיבוד הדואר הנכנס",
  "features.f1.desc": "ממיין את הכאוס להקשרים ותאריכים",
  "features.f2.title": "הקשרים",
  "features.f2.desc": "רואה רק את מה שניתן לעשות כאן ועכשיו",
  "features.f3.title": "דדליינים בנפרד",
  "features.f3.desc": "מה שחשוב נראה, השאר לא לוחץ",
  "features.f4.title": "בחירה במקום תוכנית",
  "features.f4.desc": "פחות אשמה, יותר פעולה",
  "features.f5.title": "פינוי ראש",
  "features.f5.desc": "הראש מתקל",
  "features.f6.title": "סקירה שבועית",
  "features.f6.desc": "שומר על פוקוס ללא ישיבת תכנון",

  // pricing
  "pricing.title": "סקירת מחירים",
  "pricing.subtitle":
    "DTG Studio יהיה בתשלום. כרגע אתה נרשם לגישה מוקדמת — התשלום יגיע לקראת השקה ציבורית.",
  "pricing.soon": "בקרוב",
  "pricing.monthly.label": "חודשי",
  "pricing.monthly.amount": "29",
  "pricing.monthly.unit": "₪/חו'",
  "pricing.monthly.desc": "למי שרוצה לנסות ללא התחייבות",
  "pricing.yearly.label": "שנתי",
  "pricing.yearly.amount": "299",
  "pricing.yearly.unit": "₪/שנה",
  "pricing.yearly.desc": "משתלם יותר מחודשי אם נשארים לטווח ארוך",
  "pricing.early.label": "Early birds",
  "pricing.early.currency": "₪",
  "pricing.early.period": "למשך חודשיים",
  "pricing.early.desc": "ל-100 המשתמשים הראשונים מרשימת ההמתנה",
  "pricing.disclaimer":
    "המחירים עשויים להשתנות מעט לפני ההשקה, אך תנאי early birds נעולים עם ההזמנה.",

  // access
  "access.title": "גישה מוקדמת ללא סיכון",
  "access.benefit1": "הזמנה לבטא למשתמשים ראשונים",
  "access.benefit2": "קולך ישפיע על הפיתוח",
  "access.benefit3": "סקירת צבר המשימות שלך עם המייסד",
  "access.benefit4": "חודשיים של שימוש חינם",
  "access.already": "כבר יש לך גישה?",
  "access.signin": "כניסה לאפליקציה",
  "access.footnote":
    "גישה מוקדמת להשקה סגורה וחודשיים של שימוש חינם ל-100 המשתמשים הראשונים.",

  // waitlist
  "waitlist.submit": "הצטרף לרשימת ההמתנה",
  "waitlist.submitting": "שולח...",
  "waitlist.no_spam": "ללא ספאם. רק הזמנה לבטא.",
  "waitlist.success_title": "כמעט שם!",
  "waitlist.success_sent_prefix": "שלחנו אימייל אישור אל",
  "waitlist.success_sent_suffix":
    "אנא לחץ על הקישור באימייל כדי לשמור את מקומך בתור.",
  "waitlist.toast_success": "נשלח! בדוק את האימייל שלך לאישור.",
  "waitlist.toast_error_default": "משהו השתבש. נסה שוב.",
  "waitlist.toast_error_network": "שגיאת רשת. אנא בדוק את החיבור שלך.",

  // footer
  "footer.rights": "© 2024 DTG Studio. כל הזכויות שמורות.",
  "footer.privacy": "מדיניות פרטיות",
};

export default he;
