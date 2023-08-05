"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Pageone from "@/components/pageone";
import Pagetwo from "@/components/pagetwo";
import Pagethree from "@/components/pagethree";
import Pagefour from "@/components/pagefour";
import Pagefive from "@/components/pagefive";
import Pagesix from "@/components/pagesix";
import Pageseven from "@/components/pageseven";
import Pageeight from "@/components/pageeight";
import Pagenine from "@/components/pagenine";
import Pageten from "@/components/pageten";
import Pageeleven from "@/components/pageleven";
import Pageend from "@/components/pageend";

const PageFlip = dynamic(() => import("react-pageflip"), { ssr: false });

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-4 md:p-20">
			<PageFlip
				width={getWindowWidth() < 600 ? getWindowWidth() : 600}
				height={700}
				showSwipeHint
				orientation="horizontal"
				responsive
				maxShadowOpacity={0.5}
				pageBackground="#ffffff"
				pageStyle={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* Cover page */}
				<div className="bg-gray-400 flex items-center justify-center">
					<Image
						src="/shadow3c.png"
						alt="Book Cover"
						className="object-fill"
						fill={true}
						priority
					/>
				</div>

				{/* Cover Title */}
				<div className="bg-white flex flex-col items-center justify-center">
					<h1 className="text-2xl font-bold text-black text-center mt-20">
						The Adventures of
					</h1>
					<h1 className="text-4xl font-bold text-black text-center">
						Shadow the Cat
					</h1>

					<h2 className="mt-20 text-black text-xl text-center">Book 1</h2>
					<h3 className="mt-2 text-black text-2xl font-bold text-center">
						The Black Ninja
					</h3>
					<Image
						src="/paw.png"
						width={100}
						height={100}
						alt="Paw print"
						className="flex md:my-10 align-center items-center justify-center m-auto"
					/>
					<div className="mt-20">
						<p className="text-base text-red-950 font-bold text-center mt-5">
							Story by: Lewiz Chad
						</p>
						<p className="text-sm text-black text-center mt-5">
							Developed by: ZtonatZ
						</p>
					</div>
				</div>

				{/* Page 1 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pageone />
				</div>

				{/* Page 2 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pagetwo />
				</div>

				{/* Page 3 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pagethree />
				</div>

				{/* Page 4 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pagefour />
				</div>

				{/* Page 5 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pagefive />
				</div>

				{/* Page 6 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pagesix />
				</div>

				{/* Page 7 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pageseven />
				</div>

				{/* Page 8 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pageeight />
				</div>

				{/* Page 9 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pagenine />
				</div>

				{/* Page 10 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pageten />
				</div>

				{/* Page 11 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pageeleven />
				</div>

				{/* Page 12 */}
				<div className="bg-white flex flex-col items-center justify-center">
					<Pageend />
				</div>

				{/* Add more pages here */}
			</PageFlip>
		</main>
	);
}

function getWindowWidth() {
	if (typeof window !== "undefined") {
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		);
	}
	return 600; // Default width if window is not available (e.g., during server-side rendering)
}
