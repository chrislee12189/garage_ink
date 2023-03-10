const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    artistCard: "w-[150px] h-[150px] sm:w-[360px] sm:h-[350px] rounded-lg cursor-pointer",
    artistCategory: "sm:text-[26px] text-[16px] flex items-center justify-center sm:mt-8 mt-4 sm:mb-10 mb-3",
    artistContainer: "flex flex-row flex-wrap md:gap-[150px] gap-10   items-center justify-center",
    artistNameAndYOE: "mt-3 mb-5 ss:text-12[px] hover:cursor-pointer",

    divider: "h-px my-10 items-center justify-center bg-gray-200 border-0 dark:bg-gray-70 w-[600px] mx-auto",
    buttonHover: "hover:scale-105",
    input: 'sm:m-4 m-6 p-2 mt-4 rounded-xl border-rounded md:w-[600px] w-[330px] bg-gray-100',

    reviewFields:"py-3 rounded-xl bg-sky-300  px-5 mb-3 break-words",
    reviewFieldText:"text-black  text-[20px] font-bold italic",

    userFormFields: "bg-slate-200 border-black  p-5 mt-8 rounded-xl border",

    storeImageStyle: 'h-full w-full object-cover object-center',
    storeDivStyle: 'w-full overflow-hidden rounded-lg bg-gray-200',
    storeItemTitle: "mt-4 text-sm text-white",
    storeItemPrice: "mt-1 text-lg  font-medium text-white",

    consultationsLabel:"font-poppins text-[14px] text-dimWhite bg-grey-500",
    consultationsInput: "p-2 mt-8 rounded-xl border w-full"
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;