export type Settings = { fullName?:string; address?:string; policy?:string; insurer?:string; iban?:string; lang?: 'en'|'de' };

export function buildClaimLetter(data: {
  settings: Settings;
  fileName: string;
  serviceDate: string;
  total: number;
  highlights: string[];
}): string {
  const s = data.settings || {};
  const header = s.lang==='en' ?
`To: ${s.insurer || 'Your Insurer'}
Policy: ${s.policy || '-'}
From: ${s.fullName || '-'}, ${s.address || '-'}` :
`An: ${s.insurer || 'Ihre Versicherung'}
Versicherungsnummer: ${s.policy || '-'}
Von: ${s.fullName || '-'}, ${s.address || '-'}`;

  const body = s.lang==='en' ?
`Subject: Reimbursement request for ${data.fileName}

Dear Sir/Madam,

I request reimbursement for the attached invoice (service date: ${data.serviceDate}).
Please note the following points:
- ${data.highlights.join('\n- ')}

Total amount: €${data.total.toFixed(2)}.

Kind regards,` :
`Betreff: Kostenerstattung für ${data.fileName}

Sehr geehrte Damen und Herren,

hiermit beantrage ich die Erstattung der beigefügten Rechnung (Leistungsdatum: ${data.serviceDate}).
Bitte beachten Sie folgende Punkte:
- ${data.highlights.join('\n- ')}

Gesamtbetrag: €${data.total.toFixed(2)}.

Mit freundlichen Grüßen,`;

  return `${header}

${body}
`;
}
