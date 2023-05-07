const person = {
  name: "Oriade Dhikrullah",
  address: {
    line1: "Ogunfowora Estate",
    city: "Alimosho, Lagos",
    country: "Nigeria",
  },
  profiles: ["Twitter", "LinkedIn", "Instagram"],
  printProfile: () => {
    person.profiles.map((profile) => console.log(profile));
    // console.log(person.profiles[0]);
  },
};

export default function LearningJavaScript() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      <div>{person.profiles[0]}</div>
      <div>{person.printProfile()}</div>
    </>
  );
}
