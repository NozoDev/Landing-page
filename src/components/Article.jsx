import React from "react";

const Article = () => {
  return (
    <div className="mt-[10%] p-6 flex flex-col">
      <h2 className="text-4xl text-center mb-12">Latest Articles</h2>
      <div className="grid gap-4 lg:flex ">
        <div className="text-GrayishBlue bg-LightGrayish lg:flex lg:justify-center items-center lg:flex-col ">
          <img
            className="rounded-t-lg lg:w-full md:w-full lg:h-full"
            src="./images/image-currency.jpg"
            alt="currency"
          />

          <h4 className="p-4 text-[10px] lg:-ml-28 hover:text-blue-500 cursor-pointer">
            By Claire Robinson
          </h4>
          <h2 className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2 ">
            Receive money in any currency with no fees
          </h2>
          <p className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2">
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single...
          </p>
        </div>

        <div className="text-GrayishBlue bg-LightGrayish lg:flex  lg:justify-center items-center lg:flex-col">
          <img
            className="rounded-t-lg lg:w-full md:w-full lg:h-full"
            src="./images/image-restaurant.jpg"
            alt="restaurant"
          />
          <h4 className="p-4 text-[10px] lg:-ml-28 hover:text-blue-500 cursor-pointer">
            By Wilson Hutton
          </h4>
          <h2 className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2 ">
            Treat yourself without worrying abour money
          </h2>
          <p className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2 ">
            Our simple budgeting teature allows you to separate out your
            spending and set realistic limits each month. That means you
          </p>
        </div>

        <div className="text-GrayishBlue bg-LightGrayish lg:flex lg:justify-center items-center lg:flex-col">
          <img
            className="rounded-t-lg lg:w-full md:w-full lg:h-full"
            src="./images/image-plane.jpg"
            alt="plane"
          />

          <h4 className="p-4 text-[10px] lg:-ml-28 hover:text-blue-500 cursor-pointer">
            By Wilson Hutton
          </h4>
          <h2 className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2 ">
            Take your Easybank card wherever you go
          </h2>
          <p className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2">
            We want you to enjoy your travels. This is why we don't change any
            fees on purchases while you're abroad. We'll even show you ...
          </p>
        </div>

        <div className="text-GrayishBlue bg-LightGrayish lg:flex lg:justify-center items-center lg:flex-col">
          <img
            className="rounded-t-lg lg:w-full md:w-full lg:h-full"
            src="./images/image-confetti.jpg"
            alt="confetti"
          />

          <h4 className="p-4 text-[10px] lg:-ml-28  hover:text-blue-500 cursor-pointer">
            By Claire Robinson
          </h4>
          <h2 className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2">
            Our invite-only Beta accounts are now live!
          </h2>
          <p className="text-[10px] lg:text-[15px] xl:text-[15px] md:text-[15px] p-2">
            After a lot of hard work by the whole team, we're excited to launch
            our closed beta. It's easy to request an invite throung the site..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
