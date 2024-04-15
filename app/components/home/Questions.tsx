import FrequentlyAsked from "@/app/ui/FrequentlyAsked";
interface Question {
  id: Number;
  question: String;
  paragraph: [];
  ul: [];
}
const Questions = () => {
  return (
    <div className="w-[98%] md:w-[95%] lg:w-[90%] xl:w-[85%] m-auto ">
      <FrequentlyAsked />;
    </div>
  );
};

export default Questions;
