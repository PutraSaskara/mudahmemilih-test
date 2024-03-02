import Input from "../../components/search/Input";

const RootLayout = async ({ children }) => {


    return (
      <>
        <div className="mt-[150px]">
        <Input/>
          {children}
        </div>
      </>
    );
  };
  
  export default RootLayout;
  