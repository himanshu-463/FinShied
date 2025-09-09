export function detectFraud(text) {
  let suspicious = false;
  let reasons = [];

  const patterns = [
    { regex: /(kyc|blocked|suspend|urgent|lottery|reward)/i, reason: "Suspicious keywords" },
    { regex: /(http:\/\/|https:\/\/|bit\.ly|tinyurl|upi\.me)/i, reason: "Suspicious link detected" },
    { regex: /(send.*₹\d+)/i, reason: "Fraudulent UPI pattern" }
  ];

  patterns.forEach(p => {
    if (p.regex.test(text)) {
      suspicious = true;
      reasons.push(p.reason);
    }
  });

  return {
    status: suspicious ? "Suspicious ⚠️" : "Safe ✅",
    reasons
  };
}
