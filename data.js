const AGENTS = {
  vinod: {
    name:"Vinod_S", initials:"VS", color:"#0891b2",
    cq:98, audits:4, ncf:0, totalErrors:2,
    params:{ss:0, etq:2, prob:0, sol:0, fu:0, tag:0},
    aois:[
      {cat:"etq", label:"Call/Chat Etiquette", text:"Call/Chat Etiquette — flagged in 2 of 4 audits this month. Reviewer note on a \"Customer Grievance · Customer Service\" audit: cx had and issue reflated to the tc and bad shopping experience in the recent time at the store. JC replied for the same and resolve the issue at the cx end However FRT was missing in the first reply"},
    ],
    cases:[
      {query:"Customer Grievance · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). cx had and issue reflated to the tc and bad shopping experience in the recent time at the store. JC replied for the same and resolve the issue at the cx end However FRT was missing in the first reply"},
      {query:"Random · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). cx had an issue related to the xclusive points. Jc check and reply for the same. However FRT was missing."},
      {query:"Random · Customer Service", score:100, comment:"Good work!! Good Stuff: Accurate Issue Assessment & Resolution: JC thoroughly understood the customer's escalation and worked proactively to provide an effective resolution. Effective De-escalation & Service Recovery: When a repair was not possible, JC went the extra mile by offering a goodwill gift, successfully converting an escalated situation into a positive customer experience. Needs Improvement: None—great job handling a challenging repair limitation with empathy and strong service recovery!"},
      {query:"Random · Customer Service", score:100, comment:"Good work!! Good Stuff: Effective Grievance Handling & Escalation De-escalation: JC handled the customer's grievance exceptionally well, successfully turning around an escalated situation through strong ownership and empathy. Timely Follow-Up: JC ensured consistent, timely follow-ups with the customer until the issue was resolved, reinforcing trust and accountability. Needs Improvement: None—great job turning a difficult escalation into a positive customer experience!"},
    ],
    paramCaseMap:{ss:[], etq:[0, 1], prob:[], sol:[], fu:[], tag:[]}
  },
  vatsal: {
    name:"Vatsal_Pa", initials:"VP", color:"#16a34a",
    cq:95, audits:4, ncf:0, totalErrors:3,
    params:{ss:1, etq:2, prob:0, sol:0, fu:0, tag:0},
    aois:[
      {cat:"etq", label:"Call/Chat Etiquette", text:"Call/Chat Etiquette — flagged in 2 of 4 audits this month. Reviewer note on a \"Customer Grievance · contact US\" audit: cx had an issue related to the points. JC check and update the cx with the update. FRT was missing."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 1 of 4 audits this month. Reviewer note on a \"Random · Customer Service\" audit: Initial Query Miscomprehension & Unnecessary Turnaround Time: JC did not fully understand the customer's query at first and unnecessarily quoted a 24-hour resolution timeline when the customer only needed a simple confirmation.…"},
    ],
    cases:[
      {query:"Customer Grievance · contact US", score:95, comment:"AOI — Call/Chat Etiquette (Slight). cx had an issue related to the points. JC check and update the cx with the update. FRT was missing."},
      {query:"Customer Grievance · contact US", score:95, comment:"AOI — Call/Chat Etiquette (Slight). cx wanted to have the TC to be continued without cancelling. JC replied and assisted to the cx. Need to reply within FRT"},
      {query:"Random · Customer Service", score:100, comment:"Good work!! Good Stuff: JC accurately understood the customer's query and provided the right resolution. Needs Improvement: While the resolution was accurate, the overall turnaround time could have been reduced to resolve the customer's query more promptly and improve efficiency."},
      {query:"Random · Customer Service", score:90, comment:"AOI — Soft Skills (Slight). Good Stuff: JC provided an immediate resolution once the query was clear. Needs Improvement: Initial Query Miscomprehension & Unnecessary Turnaround Time: JC did not fully understand the customer's query at first and unnecessarily quoted a 24-hour resolution timeline when the customer only needed a simple confirmation. Carefully reading and comprehending the query upfront avoids setting unnecessary wait expectations and ensures a smoother, faster customer experience."},
    ],
    paramCaseMap:{ss:[3], etq:[0, 1], prob:[], sol:[], fu:[], tag:[]}
  },
  jabeen: {
    name:"Jabeen_S", initials:"JS", color:"#7c3aed",
    cq:95, audits:4, ncf:0, totalErrors:4,
    params:{ss:0, etq:4, prob:0, sol:0, fu:0, tag:0},
    aois:[
      {cat:"etq", label:"Call/Chat Etiquette", text:"Call/Chat Etiquette — flagged in 4 of 4 audits this month. Reviewer note on a \"Customer Grievance · Customer Service\" audit: Cx had an issue related to the refund. cx shared the details with the cx and resolved. However FRT was missing. check for the further assistance."},
    ],
    cases:[
      {query:"Customer Grievance · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). Cx had an issue related to the refund. cx shared the details with the cx and resolved. However FRT was missing. check for the further assistance."},
      {query:"Customer Grievance · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). Cx had an issue related to the exchange as TC due to the information gap within the team. store team did not able to resolve the query. JC empathize the situation and took a discount coupon for the cx and have the call back arrange for the online team to place the order for the cx."},
      {query:"Random · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). Good Stuff: JC assisted well once the interaction began and handled the customer's query effectively. Needs Improvement: Delayed First Response Time (FRT)"},
      {query:"Random · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). Good Stuff: JC assisted well once the interaction began and handled the customer's query effectively. Needs Improvement: Delayed First Response Time (FRT): Although the customer's ticket was created at 11:10, the first response was not sent until 4:00 (nearly a 5-hour delay). Timely initial acknowledgment and adherence to first-response SLAs are essential to prevent customer frustration and maintain trust."},
    ],
    paramCaseMap:{ss:[], etq:[0, 1, 2, 3], prob:[], sol:[], fu:[], tag:[]}
  },
  darsh: {
    name:"Darsh_V", initials:"DV", color:"#2563eb",
    cq:93, audits:4, ncf:0, totalErrors:4,
    params:{ss:1, etq:2, prob:1, sol:0, fu:0, tag:0},
    aois:[
      {cat:"etq", label:"Call/Chat Etiquette", text:"Call/Chat Etiquette — flagged in 2 of 4 audits this month. Reviewer note on a \"Customer Grievance · Customer Service\" audit: Cx had an issue related to the delivery. jc resolved the issue and have the order dispatched for the cx. FRT was missing."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 1 of 4 audits this month. Reviewer note on a \"Customer Grievance · Customer Service\" audit: cx had an issue related to the Invoice number while check for the BIS certificate number. JC checked and raise the concern team and provide the update to the cx and later resolved the query. However FTR and the apology was…"},
      {cat:"prob", label:"Probing", text:"Probing — flagged in 1 of 4 audits this month. Reviewer note on a \"Random · Customer Service\" audit: Missed Pickup Address & Phone Number Confirmation: JC did not verify the customer's pickup address and contact phone number before arranging the pickup, which is an essential step to prevent logistical delays and ensure a smooth,…"},
    ],
    cases:[
      {query:"Customer Grievance · Customer Service", score:95, comment:"AOI — Call/Chat Etiquette (Slight). Cx had an issue related to the delivery. jc resolved the issue and have the order dispatched for the cx. FRT was missing."},
      {query:"Customer Grievance · Customer Service", score:85, comment:"AOI — Soft Skills (Slight), Call/Chat Etiquette (Slight). cx had an issue related to the Invoice number while check for the BIS certificate number. JC checked and raise the concern team and provide the update to the cx and later resolved the query. However FTR and the apology was missing to the cx."},
      {query:"Random · Customer Service", score:100, comment:"Good work!! Good Stuff: Strong Assistance & Timely Responses: JC assisted really well throughout the interaction, providing prompt and clear responses to the customer. Proactive Assurances & On-Time Delivery: JC offered appropriate reassurances that kept the customer confident, and ensured the order was delivered on time. Needs Improvement: None—great job delivering a smooth, reassuring, and timely customer experience!"},
      {query:"Random · Customer Service", score:90, comment:"AOI — Probing (Slight). Good Stuff: JC assisted really well throughout the interaction and provided an effective resolution for the customer. Needs Improvement: Missed Pickup Address & Phone Number Confirmation: JC did not verify the customer's pickup address and contact phone number before arranging the pickup, which is an essential step to prevent logistical delays and ensure a smooth, hassle-free pickup experience."},
    ],
    paramCaseMap:{ss:[1], etq:[0, 1], prob:[3], sol:[], fu:[], tag:[]}
  },
  jhanvi: {
    name:"Jhanvi_Wa", initials:"JW", color:"#ea580c",
    cq:85, audits:4, ncf:0, totalErrors:3,
    params:{ss:0, etq:0, prob:0, sol:1, fu:2, tag:0},
    aois:[
      {cat:"fu", label:"Follow Up", text:"Follow Up — flagged in 2 of 4 audits this month. Reviewer note on a \"Customer Grievance · contact US\" audit: cx had na issue related to the one sku. As out of multiple sku one sku happens to be RTO. Jc informed to the cx and also raised the request for the same. follow up missed BoD over NCF. Also did not provide the correct resolution…"},
      {cat:"sol", label:"Solution & Recommendation", text:"Solution & Recommendation — flagged in 1 of 4 audits this month. Reviewer note on a \"Customer Grievance · contact US\" audit: cx had na issue related to the one sku. As out of multiple sku one sku happens to be RTO. Jc informed to the cx and also raised the request for the same. follow up missed BoD over NCF. Also did not provide the correct resolution…"},
    ],
    cases:[
      {query:"Customer Grievance · contact US", score:60, comment:"AOI — Solution & Recommendation (Significant), Follow Up (Significant). cx had na issue related to the one sku. As out of multiple sku one sku happens to be RTO. Jc informed to the cx and also raised the request for the same. follow up missed BoD over NCF. Also did not provide the correct resolution to the cx. As request should have raised for the re- dispatch ed from internally through KF."},
      {query:"Customer Grievance · contact US", score:80, comment:"AOI — Follow Up (Significant). Cx had an issue related to the delivery. jc resolved the issue and have the order dispatched for the cx. FRT was missing."},
      {query:"Random · Customer Service", score:100, comment:"Good work!! Good Stuff: Helpful Assistance & Effective Price-Difference Resolution: JC assisted well throughout the interaction and provided a one-time coupon to cover the price difference, resolving the customer's concern smoothly. Needs Improvement: Missed Pre-Sale Lead Creation: JC missed the opportunity to raise a pre-sale lead so a specialist could proactively follow up and guide the customer through placing their order using the coupon, maximizing conversion."},
      {query:"Random · Customer Service", score:100, comment:"Good work!! Good Stuff: Thorough Information Gathering: JC assisted well and gathered sufficient, relevant details from the customer to accurately assess the situation. Effective Resolution & Exception Handling: Using the information collected, JC resolved the issue smoothly and approved an appropriate exception to ensure a positive customer outcome. Needs Improvement: None—great job probing effectively and taking ownership to resolve the customer's request!"},
    ],
    paramCaseMap:{ss:[], etq:[], prob:[], sol:[0], fu:[0, 1], tag:[]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", etq:"Call/Chat Etiquette", prob:"Probing", sol:"Solution & Recommendation", fu:"Follow Up", tag:"Tagging"};
const PARAM_COLORS = {ss:"#ea580c", etq:"#0891b2", prob:"#2563eb", sol:"#dc2626", fu:"#16a34a", tag:"#7c3aed"};