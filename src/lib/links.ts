export function createMailto(email: string, subject: string) {
  const encodedSubject = encodeURIComponent(subject);
  return `mailto:${email}?subject=${encodedSubject}`;
}

export function createZaloUrl(phone: string) {
  const normalized = phone.replace(/\D/g, "");
  return `https://zalo.me/${normalized}`;
}
