import React from "react";

interface Heading {
  header: String;
  paragraph?: String;
}
const HeaderWelcom = ({ header, paragraph }: Heading) => {
  return (
    <div className="pt-20">
      <h3 className="text-[#E1E6F0] md:text-5xl text-3xl font-bold">
        {header}
      </h3>
      {paragraph && (
        <p className="text-[#8F98B2] mt-8 text-2xl font-normal">{paragraph}</p>
      )}
    </div>
  );
};

export default HeaderWelcom;
