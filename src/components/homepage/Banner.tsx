import Image from 'next/image'
import book from '@/assets/b.png'
const Banner = () => {
    return (
        <section className="p-10">
            <div className="bg-slate-200 rounded-3xl py-10 container mx-auto grid grid-cols-2 justify-between items-center">


                <div className="flex flex-col items-center gap-6">
                    <h2 className="font-bold text-5xl">Books to freshen up <br></br>your bookshelf</h2>
                    <button className="btn btn-success bg-green-500 shadow-none">View The List</button>
                </div>

                <div>
                    <Image
                        src={book}
                        alt={'book'}
                    />


                </div>
            </div>
        </section>
    );
};

export default Banner;