const subscriptionPlans = [
  {
    id: 1,
    name: "Basic Chef",
    type:"basic",
    priceMonthly: "$4.99",
    priceYearly : "$59.88",
    features: [
      "Access to 200+ basic recipes",
      "Save up to 20 favorite recipes",
      "Basic nutrition info",
      "Ad-supported experience"
    ],
    bestFor: "Casual home cooks",
    trial: "7-day free trial",
    color: "green"
  },
  {
    id: 2,
    name: "Pro Cook",
    type:"pro",
    priceMonthly: "$9.99",
    priceYearly : "$119.88",
    features: [
      "Access to 1,000+ recipes",
      "Step-by-step cooking videos",
      "Meal planner & shopping list",
      "Save unlimited recipes",
    ],
    bestFor: "Busy families & food lovers",
    trial: "14-day free trial",
    color: "yellow"
  },
  {
    id: 3,
    name: "Master Chef",
    type:"master",
    priceMonthly: "$19.99",
    priceYearly : "$239.88",
    features: [
      "Access to 3,000+ premium recipes",
      "Personalized AI recipe suggestions",
      "Exclusive live cooking classes",
      "Download recipes offline",
      
    ],
    bestFor: "Serious cooks & food enthusiasts",
    trial: "30-day free trial",
    color: "red"
  }
];
export default subscriptionPlans