const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative h-[363px] z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
        data-wow-delay=".1s"
      >
        <div >{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
