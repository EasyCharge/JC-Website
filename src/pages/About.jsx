import ImageAboutUs from "../components/ImageAboutUs";
import { FOUNDERS } from "../products";

function About() {
  return (
    <>
      <div className="bg-gray-100 p-8 md:p-16 mt-10 md:mt-28 mx-auto w-3/4 rounded-md shadow-lg">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Founders</h2>
        <ul className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {FOUNDERS.map((person) => (
            <ImageAboutUs key={person.id} data={person} />
          ))}
        </ul>
      </div>
      <div className="ml-auto bg-slate-50 p-8 md:p-16 mt-6 md:mt-12 rounded-md shadow-lg overflow-y-auto z-10">
        {" "}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc text-base md:text-lg">
          <li>Dies dasd</li>
          <li>Dies dasd</li>
          <li>Dies dasd</li>
          <li>Dies adsda</li>
        </ul>
      </div>
    </>
  );
}

export default About;
