import bsBrochure from "../assets/documents/bs_brochure.pdf";
import roundSteelImage from "../assets/images/round-steels.jpg";
import squareSteelImage from "../assets/images/square.jpg";
import rectangleSteelImage from "../assets/images/rectangle-steel.jpg";
import steelWindow1 from "../assets/images/steel-window-1.jpg";
import steelWindow2 from "../assets/images/steel-window-2.jpg";
import steelWindow3 from "../assets/images/steel-window-3.jpg";
import steelWindow4 from "../assets/images/steel-window-4.jpg";
import steelDoor1 from "../assets/images/steel-door-1.jpeg";
import steelDoor2 from "../assets/images/steel-door-2.jpg";
import steelDoor3 from "../assets/images/steel-door-3.jpg";
import steelDoor4 from "../assets/images/steel-door-4.jpg";
import steelGate1 from "../assets/images/steel-gate-1.jpeg";
import steelGate2 from "../assets/images/steel-gate-2.jpg";
import steelGate3 from "../assets/images/steel-gate-3.jpg";
import steelGate4 from "../assets/images/steel-gate-4.jpeg";
import steelStairs1 from "../assets/images/steel-stairs-1.jpg";
import steelStairs2 from "../assets/images/steel-stairs-2.jpg";
import steelStairs3 from "../assets/images/steel-stairs-3.jpg";
import steelStairs4 from "../assets/images/steel-stairs-4.jpg";
import steelSwing1 from "../assets/images/steel-swing-1.jpg";
import steelSwing2 from "../assets/images/steel-swing-2.jpg";
import steelSwing3 from "../assets/images/steel-swing-3.jpg";
import steelSwing4 from "../assets/images/steel-swing-4.jpg";
import steelFurniture1 from "../assets/images/steel-furniture-1.jpg";
import steelFurniture2 from "../assets/images/steel-furniture-2.jpg";
import steelFurniture3 from "../assets/images/steel-furniture-3.jpg";
import steelFurniture4 from "../assets/images/steel-furniture-4.jpg";

const localdb = {
  aboutSteel: {
    round: {
      name: "Round Stainless Steel",
      desc: "Round pipes, also known as round tubes, have a circular cross-section and are widely used in various furniture and home decor applications. Their versatile shape allows for easy integration into chair frames, table legs, and other circular elements. The outer diameter, thickness, and material grade of circle stainless steel welded tubes are carefully selected to provide strength, stability, and corrosion resistance.",
      size: ["12.7", "15.88", "19.05", "25.4", "31.8", "38.1", "63.5", "76.2"],
      outerDiameter: "9.52 MM - 127 MM",
      thickness: "0.3 MM - 3 MM",
      length: "20 FT",
      usages: "Infrastructure, Furniture, Home Decore etc.",
      productImg: roundSteelImage,
    },

    square: {
      name: "Square Stainless Steel",
      desc: "Square pipes on the other hand, feature a square cross-section and are commonly utilized in the construction of frames, handrails, and decorative accents. The precise outer diameter, thickness, and length of square stainless steel welded tubes ensure the stability and durability necessary for furniture applications. They offer a clean and contemporary aesthetic that complements modern home decor styles.",
      size: ["12 x 12", "20 x 20", "25 x 25", "40 x 40", "60 x 60"],
      outerDiameter: "9.52 MM - 127 MM",
      thickness: "0.3 MM - 3 MM",
      length: "20 FT",
      usages: "Infrastructure, Furniture, Home Decore etc.",
      productImg: squareSteelImage
    },

    rectangle: {
      name: "Rectangular Stainless Steel",
      desc: "Rectangular pipes are characterized by their rectangular cross-section, providing a sleek and modern look to home decor and furniture applications. They are often used in constructing frames, shelves, and supports for tables, cabinets, and other furniture pieces. The outer diameter and thickness of rectangular stainless steel welded tubes can be customized to meet specific design requirements.",
      size: ["13 x 26", "20 x 40", "25 x 50", "25 x 75", "30 x 80", "40 x 80"],
      outerDiameter: "9.52 MM - 127 MM",
      thickness: "0.3 MM - 3 MM",
      length: "20 FT",
      usages: "Infrastructure, Furniture, Home Decore etc.",
      productImg: rectangleSteelImage,
    },
  },

  aboutGrade: [
    {
      gradeNum: "201",
      gradeDesc: "<strong>Corrosion Resistance: </strong>Grade 201 offers good resistance to corrosion, especially in mildly corrosive environments.<br/><strong>Formability: </strong>It has excellent formability, allowing for ease of shaping and fabrication.<br/><strong>Cost-Effective: </strong>Grade 202 is generally more affordable compared to other stainless steel grades, making it a popular choice for various applications.<br/><strong>Aesthetic Appeal: </strong>It can achieve a polished, reflective surface, enhancing its visual appeal in home decor and furniture.<br/><strong>Remarks: </strong>Each grade has its own specific characteristics, and the selection depends on factors such as the intended application, environmental conditions, and budget. By choosing the appropriate grade, stainless steel tube manufacturers can ensure that their products meet the required performance standards and fulfill customer expectations."
    },
    {
      gradeNum: "202",
      gradeDesc: "<strong>Corrosion Resistance: </strong>Grade 202 offers good resistance to corrosion, especially in mildly corrosive environments.<br/><strong>Formability: </strong>It has excellent formability, allowing for ease of shaping and fabrication.<br/><strong>Cost-Effective: </strong>Grade 202 is generally more affordable compared to other stainless steel grades, making it a popular choice for various applications.<br/><strong>Aesthetic Appeal: </strong>It can achieve a polished, reflective surface, enhancing its visual appeal in home decor and furniture.<br/><strong>Remarks: </strong>Each grade has its own specific characteristics, and the selection depends on factors such as the intended application, environmental conditions, and budget. By choosing the appropriate grade, stainless steel tube manufacturers can ensure that their products meet the required performance standards and fulfill customer expectations."
    },
    {
      gradeNum: "304",
      gradeDesc: "<strong>Corrosion Resistance: </strong>Grade 304 provides excellent corrosion resistance, making it suitable for a wide range of applications, including those exposed to moisture and chemicals.<br/><strong>High Strength: </strong>It has high tensile strength and good toughness, ensuring durability and reliability.<br/><strong>Heat Resistance: </strong>Grade 304 exhibits good heat resistance, allowing it to withstand high temperatures without compromising its structural integrity.<br/><strong>Versatility: </strong>It is highly versatile, suitable for various industries and applications, including home decor, furniture, kitchenware, and architecture.<br/><strong>Remarks: </strong>Each grade has its own specific characteristics, and the selection depends on factors such as the intended application, environmental conditions, and budget. By choosing the appropriate grade, stainless steel tube manufacturers can ensure that their products meet the required performance standards and fulfill customer expectations."
    },
    {
      gradeNum: "304L",
      gradeDesc: "<strong>Corrosion Resistance: </strong>Grade 304L provides excellent corrosion resistance, making it suitable for a wide range of applications, including those exposed to moisture and chemicals.<br/><strong>High Strength: </strong>It has high tensile strength and good toughness, ensuring durability and reliability.<br/><strong>Heat Resistance: </strong>Grade 304 exhibits good heat resistance, allowing it to withstand high temperatures without compromising its structural integrity.<br/><strong>Versatility: </strong>It is highly versatile, suitable for various industries and applications, including home decor, furniture, kitchenware, and architecture.<br/><strong>Remarks: </strong>Each grade has its own specific characteristics, and the selection depends on factors such as the intended application, environmental conditions, and budget. By choosing the appropriate grade, stainless steel tube manufacturers can ensure that their products meet the required performance standards and fulfill customer expectations."
    },
    {
      gradeNum: "316",
      gradeDesc: "<strong>Superior Corrosion Resistance: </strong>Grade 316 offers superior corrosion resistance, particularly in aggressive environments, such as marine or chemical settings.<br/><strong>Pitting and Crevice Corrosion Resistance: </strong>It demonstrates exceptional resistance to pitting and crevice corrosion, ensuring longevity and durability.<br/><strong>High Temperature Resistance: </strong>Grade 316 maintains its structural integrity even at elevated temperatures, making it suitable for applications involving heat.<br/><strong>Hygienic Properties: </strong>It is commonly used in food processing, pharmaceutical, and medical industries due to its hygienic properties and resistance to corrosion from acids and alkalis.<br/><strong>Remarks: </strong>Each grade has its own specific characteristics, and the selection depends on factors such as the intended application, environmental conditions, and budget. By choosing the appropriate grade, stainless steel tube manufacturers can ensure that their products meet the required performance standards and fulfill customer expectations."
    },
    {
      gradeNum: "316L",
      gradeDesc: "<strong>Superior Corrosion Resistance: </strong>Grade 316L offers superior corrosion resistance, particularly in aggressive environments, such as marine or chemical settings.<br/><strong>Pitting and Crevice Corrosion Resistance: </strong>It demonstrates exceptional resistance to pitting and crevice corrosion, ensuring longevity and durability.<br/><strong>High Temperature Resistance: </strong>Grade 316 maintains its structural integrity even at elevated temperatures, making it suitable for applications involving heat.<br/><strong>Hygienic Properties: </strong>It is commonly used in food processing, pharmaceutical, and medical industries due to its hygienic properties and resistance to corrosion from acids and alkalis.<br/><strong>Remarks: </strong>Each grade has its own specific characteristics, and the selection depends on factors such as the intended application, environmental conditions, and budget. By choosing the appropriate grade, stainless steel tube manufacturers can ensure that their products meet the required performance standards and fulfill customer expectations."
    },
  ],

  urls: {
    brochure: bsBrochure,
  },

  testimonials: [
    {
      userImage: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      userName: "Shaik Mahaboob Subhani",
      userDesg: "Manager At TIH Pvt. Ltd.",
      userFeedback: "Our Engineering team works directly with Bishnu Steels to achieve our company goals. Bishnu Steels is always very helpful, gives us on-time delivery and the sales reps are always willing to research to get answers for our needs.",
    },
    {
      userImage: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      userName: "Rashmi Kumar Singh",
      userDesg: "CEO At Firla Cement Pvt. Ltd.",
      userFeedback: "Our Engineering team works directly with Bishnu Steels to achieve our company goals. Bishnu Steels is always very helpful, gives us on-time delivery and the sales reps are always willing to research to get answers for our needs.",
    },
    {
      userImage: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      userName: "Dhruti Habib Khan",
      userDesg: "Managing Director At PCS Pvt. Ltd.",
      userFeedback: "Our Engineering team works directly with Bishnu Steels to achieve our company goals. Bishnu Steels is always very helpful, gives us on-time delivery and the sales reps are always willing to research to get answers for our needs.",
    },
    {
      userImage: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      userName: "Biswajit Das",
      userDesg: "CA At Jaijhakash Hospital Pvt. Ltd.",
      userFeedback: "Our Engineering team works directly with Bishnu Steels to achieve our company goals. Bishnu Steels is always very helpful, gives us on-time delivery and the sales reps are always willing to research to get answers for our needs.",
    },
    {
      userImage: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      userName: "Dina Khan",
      userDesg: "Andorid Developer At Teloit Pvt. Ltd.",
      userFeedback: "Our Engineering team works directly with Bishnu Steels to achieve our company goals. Bishnu Steels is always very helpful, gives us on-time delivery and the sales reps are always willing to research to get answers for our needs.",
    },
  ],

  endUses: {
    windows: [
      steelWindow1, steelWindow2, steelWindow3, steelWindow4, steelWindow1, steelWindow2, steelWindow3, steelWindow4,
    ],

    doors: [
      steelDoor1, steelDoor2, steelDoor3, steelDoor4, steelDoor1, steelDoor2, steelDoor3, steelDoor4,
    ],

    gates: [
      steelGate1, steelGate2, steelGate3, steelGate4, steelGate1, steelGate2, steelGate3, steelGate4,
    ],

    stairs: [
      steelStairs1, steelStairs2, steelStairs3, steelStairs4, steelStairs1, steelStairs2, steelStairs3, steelStairs4,
    ],

    swings: [
      steelSwing1, steelSwing2, steelSwing3, steelSwing4, steelSwing1, steelSwing2, steelSwing3, steelSwing4,
    ],

    furnitures: [
      steelFurniture1, steelFurniture2, steelFurniture3, steelFurniture4, steelFurniture1, steelFurniture2, steelFurniture3, steelFurniture4,
    ],
  },

  quality: [
    {
      type: 200,
      content: "200 series is an austenitic alloy. It has the chemical composition of chromium, manganese, and nitrogen with low nickel. It has higher tensile and yield strength. The main applications of the 200 series are in washing machines, cutlery, the automotive industry, and the food and beverage industry.",
    },

    {
      type: 300,
      content: "300 series alloys are the most commercially used worldwide. 304-grade stainless steel and 316 stainless steel are popular alloys of the 300 series. It is a corrosion-resistant austenitic alloy with high chromium-nickel content. In acidic environments, molybdenum increases corrosion resistance. It functions effectively at below-freezing temperatures and has a lot of strength, heat resistance, and corrosion resistance.",
    },
  ],

  bsLocation: {
    lat: 20.164677427955464,
    long: 85.63153433089008,
  },
};

export default localdb;