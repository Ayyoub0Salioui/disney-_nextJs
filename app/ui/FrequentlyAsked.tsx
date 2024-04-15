"use client";
import Image from "next/image";
import arrowD from "@/public/arrow-down-svgrepo-com.svg";
import arrowU from "@/public/arrow-up-svgrepo-com (1).svg";
import { useState } from "react";

const FrequentlyAsked = () => {
  const [questionIsOccured, setQuestionIsOccured] = useState({
    firstQ: false,
    sacendQ: false,
    thirdQ: false,
    fourthQ: false,
    fifthQ: false,
  });
  return (
    <div className="w-full pt-40">
      <h3 className="text-[#E1E6F0] md:text-5xl text-3xl font-bold">
        Frequetly Asked Questions
      </h3>
      <div className="mt-24 flex flex-col w-full text ">
        <span
          className="text-3xl w-full flex-1 text-[#8F98B2] font-bold flex justify-between"
          onClick={() => {
            setQuestionIsOccured({
              ...questionIsOccured,
              firstQ: !questionIsOccured.firstQ,
            });
          }}
        >
          <h2 className="text-left">What is Disney+?</h2>
          <Image
            src={questionIsOccured.firstQ ? arrowU : arrowD}
            alt="arrow down"
            width={20}
            height={20}
          />
        </span>
        <hr className=" border-[#8F98B2] h-1 opacity-[0.4] mt-8" />
        <span
          className={`text-[#8F98B2] text-left   mt-4 text-xl ${
            questionIsOccured.firstQ ? "display " : "hidden "
          }`}
        >
          <p>
            Disney+ is the dedicated streaming home of your favourite stories
            from Disney, Pixar, Marvel, Star Wars, National Geographic; as well
            as a huge range of general entertainment with Star - all in one
            place. With thousands of movies, TV series, and exclusive Originals
            to choose from, there's something for everyone on Disney+.
            Subscribers can also enjoy a number of benefits included in their
            subscription, such as:
          </p>
          <ul>
            <li className="dot-li">
              Unlimited downloads on up to 10 devices and up to 7 different
              profiles
            </li>
            <li className="dot-li">
              A robust parental controls system including dedicated profiles for
              children.
            </li>
            <li className="dot-li">
              4K UHD streaming with Dolby Vision and Dolby Atmos support on
              compatible devices for no extra cost
            </li>
            <li className="dot-li">
              Up to 4 screens can stream simultaneously
            </li>
          </ul>
          <hr className=" border-[#8F98B2] opacity-[0.4] mt-2" />
        </span>
      </div>
      <div className="mt-14 flex flex-col w-full ">
        <span
          className="text-3xl w-full flex-1 text-[#8F98B2] font-bold flex justify-between"
          onClick={() => {
            setQuestionIsOccured({
              ...questionIsOccured,
              sacendQ: !questionIsOccured.sacendQ,
            });
          }}
        >
          <h2 className="text-left">What can I watch on Disney+?</h2>
          <Image
            src={questionIsOccured.sacendQ ? arrowU : arrowD}
            alt="arrow down"
            width={20}
            height={20}
          />
        </span>
        <hr className=" border-[#8F98B2] opacity-[0.4] mt-8" />
        <span
          className={`text-[#8F98B2] text-left   mt-4 text-xl ${
            questionIsOccured.sacendQ ? "display  " : "hidden "
          }`}
        >
          <p>
            With thousands of films and series from the greatest storytellers
            around the globe and more added each month, you will always find
            something to watch on Disney+
          </p>
          <ul>
            <li className="dot-li">
              The biggest animated blockbusters from Disney, like The Lion King
              and Encanto
            </li>
            <li className="dot-li">
              Heart-warming storytelling for all ages from the masterminds at
              Pixar such as Luca and Turning Red
            </li>
            <li className="dot-li">
              Experience the ever-growing story of the Marvel Cinematic Universe
              like never before with must-see exclusive Original series from
              Marvel Studios She-Hulk and Moon Knight
            </li>
            <li className="dot-li">
              Relive the epic Saga in a galaxy far away with Star Wars hit
              series, like The Mandalorian and Andor
            </li>
            <li className="dot-li">
              Open your eyes to the beauty of our planet with fearless National
              Geographic explorers and a number of insightful documentaries,
              like Gordon Ramsay: Uncharted and Welcome to Earth
            </li>
            <li className="dot-li">
              With Star you will find the most talked about bingeable series
              like the global phenomenon The Walking Dead and Grey's Anatomy
            </li>
          </ul>
          <hr className=" border-[#8F98B2] opacity-[0.4] mt-2" />
        </span>
      </div>
      <div className="mt-14 flex flex-col w-full ">
        <span
          className="text-3xl w-full flex-1 text-[#8F98B2] font-bold flex justify-between"
          onClick={() => {
            setQuestionIsOccured({
              ...questionIsOccured,
              thirdQ: !questionIsOccured.thirdQ,
            });
          }}
        >
          <h2 className="text-left">How much does Disney+ cost?</h2>
          <Image
            src={questionIsOccured.thirdQ ? arrowU : arrowD}
            alt="arrow down"
            width={20}
            height={20}
          />
        </span>
        <hr className=" border-[#8F98B2] opacity-[0.4] mt-8" />
        <span
          className={`text-[#8F98B2] text-left   mt-4 text-xl ${
            questionIsOccured.thirdQ ? "display " : "hidden "
          }`}
        >
          <p>
            The monthly subscription price for Disney+ in Morocco is 32.99 MAD a
            month or 328.99 MAD for an annual subscription (12 months for the
            price of 10*). These rates are applicable up to and including 16
            October 2023.
          </p>
          <br />
          <p>
            Starting 17 October 2023, this subscription price will be revised to
            49 MAD a month or an annual price of 490 MAD (12 months for the
            price of 10*). All new users who subscribe on or after 17 October
            2023 will be charged the revised subscription price.
          </p>
          <br />
          <p>
            All users who subscribed before 17 October 2023 and elected for a
            monthly payment plan, will be charged at the revised subscription
            prices of 49 MAD on the next billing date that occurs on or after 21
            November 2023. With thousands of films and series from the greatest
            storytellers around the globe and more added each month, you will
            always find something to watch on Disney+
          </p>
          <br />
          <p>
            *Saving compared to 12 months of the monthly subscription price.
          </p>
          <hr className=" border-[#8F98B2] opacity-[0.4] mt-2" />
        </span>
      </div>
      <div className="mt-14 flex flex-col w-full ">
        <span
          className="text-3xl w-full flex-1 text-[#8F98B2] font-bold flex justify-between"
          onClick={() => {
            setQuestionIsOccured({
              ...questionIsOccured,
              fourthQ: !questionIsOccured.fourthQ,
            });
          }}
        >
          <h2 className="text-left">What devices are supported?</h2>
          <Image
            src={questionIsOccured.fourthQ ? arrowU : arrowD}
            alt="arrow down"
            width={20}
            height={20}
          />
        </span>
        <hr className=" border-[#8F98B2] opacity-[0.4] mt-8" />
        <span
          className={`text-[#8F98B2] text-left   mt-4 text-xl ${
            questionIsOccured.fourthQ ? "display " : "hidden "
          }`}
        >
          <p>
            Disney+ supports mobile devices, web browsers, game consoles,
            set-top boxes, and smart TVs. Click
          </p>
          <hr className=" border-[#8F98B2] opacity-[0.4] mt-2" />
        </span>
      </div>
      <div className="mt-14 flex flex-col w-full ">
        <span
          className="text-3xl w-full flex-1 text-[#8F98B2] font-bold flex justify-between"
          onClick={() => {
            setQuestionIsOccured({
              ...questionIsOccured,
              fifthQ: !questionIsOccured.fifthQ,
            });
          }}
        >
          <h2 className="text-left">
            Is there any commitment when signing up for Disney+?
          </h2>
          <Image
            src={questionIsOccured.fifthQ ? arrowU : arrowD}
            alt="arrow down"
            width={20}
            height={20}
          />
        </span>
        <hr className=" border-[#8F98B2] opacity-[0.4] mt-8" />
        <span
          className={`text-[#8F98B2] text-left   mt-4 text-xl ${
            questionIsOccured.fifthQ ? "display " : "hidden "
          }`}
        >
          <p>
            Is there any commitment when signing up for Disney+?There are no
            commitments and you can cancel at any time, effective at the end of
            your current payment period. Just follow the below 5 easy steps:
          </p>
          <ul>
            <li>1. Go to www.disneyplus.com and log in</li>
            <li>2. Select your Profile</li>
            <li>3. Select Account</li>
            <li>4. Select Cancel Subscription</li>
            <li>5. Select Complete Cancellation to confirm</li>
          </ul>
          <hr className=" border-[#8F98B2] opacity-[0.4] mt-2" />
        </span>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
