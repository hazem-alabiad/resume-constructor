export const capitalizeFirstLetter = (string: String): String => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getRandomDate = () => {
  const dates = [
    "November 2006 - September 2009 (2 years 11 months)",
    "January 2008 - February 2009 (1 year 2 months)",
    "June 2010 - September 2010 (4 months)",
    "September 2009 - January 2012 (2 years 5 months)",
    "March 2012 - July 2012 ( 5 months)",
    "October 2016 - Present (3 years 11 months)",
  ];
  return dates[Math.floor(Math.random() * dates.length)];
};
