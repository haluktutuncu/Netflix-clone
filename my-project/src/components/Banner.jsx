import FormInput from "./FormInput";

export default function Banner() {
  return (
    <div className="text-white flex justify-center items-center flex-col pb-[186px]">
      <h1 className="text-[60px] pb-4 font-semibold">The best is right here</h1>
      <p className="text-2xl pb-6 ">
        Blockbuster movies, hit series and exclusive originals. All in one
        place.
      </p>
      <p className="text-xl pb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <FormInput />
    </div>
  );
}
