import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  //   priceOptions
  const gymPricingOptions = [
    {
      id: "BASIC001",
      name: "Basic Membership",
      description:
        "Perfect for beginners who want essential gym access without extra perks.",
      features: [
        "Access to gym floor",
        "Cardio + strength machines",
        "Locker access",
        "Free Wi-Fi",
      ],
      price: 29.99,
    },
    {
      id: "STANDARD002",
      name: "Standard Membership",
      description:
        "Great for regular users who want access to classes and a more complete experience.",
      features: [
        "24/7 gym access",
        "Group fitness classes",
        "Locker + shower access",
        "1 free personal training session",
      ],
      price: 49.99,
    },
    {
      id: "PREMIUM003",
      name: "Premium Membership",
      description:
        "Ideal for committed members who want advanced facilities and extra guidance.",
      features: [
        "Unlimited fitness classes",
        "Sauna + steam room",
        "Towel service",
        "Monthly body assessment",
        "3 personal training sessions",
      ],
      price: 79.99,
    },
    {
      id: "VIP004",
      name: "VIP Elite Membership",
      description:
        "For serious fitness enthusiasts who want maximum benefits and exclusive services.",
      features: [
        "Priority 24/7 access",
        "Unlimited personal training",
        "Recovery zone + massage chair",
        "Nutrition and meal plan",
        "Exclusive VIP events",
      ],
      price: 129.99,
    },
    {
      id: "DAYPASS005",
      name: "1-Day Pass",
      description:
        "For visitors or occasional users who want full access for a single day.",
      features: [
        "Full gym access for 24 hours",
        "Locker and shower access",
        "Includes cardio + strength areas",
        "Access to one fitness class",
      ],
      price: 9.99,
    },
  ];

  return (
    <div>
      {gymPricingOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
