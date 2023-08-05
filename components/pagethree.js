import Image from "next/image";

const Pagethree = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<p className="text-black text-center text-base md:text-xl mt-3">
				On the other side of Begongville, there were two brave and energetic
				greyhound dogs, Jazz and her daughter, Penny. Jazz was a sleek and agile
				greyhound, and she had passed her courageous and protective nature to
				her daughter Penny.
			</p>
			<Image
				src="/jazznpenny.png"
				alt="Jazz and Penny"
				width={350}
				height={350}
				className="flex md:my-10 align-center items-center justify-center rounded-md"
				priority
			/>
		</div>
	);
};

export default Pagethree;
