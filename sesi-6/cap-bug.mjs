// CP02: dua regresi sengaja ditanam. Bandingkan dengan PRD, bukan komentar.
export const monthKey = date => String(new Date(date).getUTCMonth() + 1).padStart(2, '0');
export const allowed = ({amount, used, limit}) => used + amount < limit;
