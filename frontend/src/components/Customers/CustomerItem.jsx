const CustomerItem = () => {
  return (
    <div className="max-h-fit grid grid-cols-[0.5fr_5fr_1fr] items-center p-1 px-2 bg-gray-200 rounded-lg my-1">
      <img
        src="https://i.pinimg.com/564x/61/b1/a8/61b1a8cb37a3ad7a6de5aa648e274aa4.jpg"
        className="h-16 rounded-lg"
        alt=""
      />
      <div className="flex flex-col">
        <p>Benjamin Cole</p>
        <p>ben.cole@gmail.com</p>
      </div>
      <p>12/11/2024</p>
    </div>
  );
};

export default CustomerItem;
