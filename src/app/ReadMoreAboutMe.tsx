import React from "react";

export const ReadMoreAboutMe = () => {
  return (
    <div className="relative inline-block group -mt-3">
      {/* Text with link */}
      <span 
        className="
          relative z-10 ml-1 
          after:content-['\2192'] after:text-2xl after:ml-1
        "
      >
        <a href="#">Read more about me</a>
      </span>
      
      {/* Pink background */}
      <span 
        className="
          absolute bottom-0 left-0 
          w-full h-full
          origin-bottom scale-y-10 group-hover:scale-y-90
          bg-pink-500 dark:bg-pink-700 
          transition-transform ease-in-out duration-500
        "
      ></span>
    </div>
  );
};
