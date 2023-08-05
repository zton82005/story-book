import Image from "next/image";

const Pageone = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<p className="text-black text-center text-base md:text-xl my-3">
				Once upon a time in a quaint little town called Begongville, there lived
				a black kitten named Shadow.
			</p>
			<Image
				src="/shadow4.png"
				alt="Scared Shadow"
				width={375}
				height={375}
				className="flex md:my-10 align-center items-center justify-center rounded-md"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl">
				Shadow was an adorable and fluffy little cat, but he had one tiny
				problem - he was a scaredy cat. He was easily frightened by the tiniest
				of things, like sudden flashes of lightning during storms.
			</p>
		</div>
	);
};

export default Pageone;
