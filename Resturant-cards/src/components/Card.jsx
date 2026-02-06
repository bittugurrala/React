import DeleteIcon from "./DeleteIcon"


export default function Card({ title, description, price, image, stock }) {
  const isLow = stock <= 10;

  return (
    <div className="h-[7rem] w-[23rem] rounded-[20px] flex items-center gap-3 bg-white p-3 shadow-xl">
      
      <div className="h-[6rem] w-[6rem] rounded-xl overflow-hidden shrink-0">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>

      <div className="flex-1 flex flex-col justify-between h-full">
        
        <div className="flex justify-between items-start">
          <h1 className="font-bold">{title}</h1>
          <button className="text-[10px] whitespace-nowrap">
            {isLow ? `Low Stock ${stock}` : `In Stock ${stock}`}
          </button>
        </div>

        <p className="text-gray-500 text-[12px]">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <h5 className="font-bold text-blue-500">${price}</h5>
          <DeleteIcon />
        </div>

      </div>
    </div>
  );
}
