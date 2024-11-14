function OrderItem({onHold}) {
    return (
        <div className={`grid  ${onHold?'grid-cols-[2fr_3fr_1fr]':'grid-cols-[2fr_3fr]'} px-3 py-2 cursor-pointer`}>
            <p>#454654</p>
            <p>11, Nov, 2024/ 03.16 PM</p>
            <p>{onHold? '$300':'' }</p>
        </div>
    )
}

export default OrderItem