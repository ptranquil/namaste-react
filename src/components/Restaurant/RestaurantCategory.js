import RestaurantItemcard from "./RestaurantItemcard";

const RestaurantCategory = ({data, showAccordion, setCurrentAccordion}) => {
    // const [showAccordion, setshowAccordion] = useState(false)
    return (
        <div className="p-4 max-w-4xl mx-auto bg-grey-50 border-b-18 border-gray-100 text-left">
            <div className="flex justify-between text-shadow-black mb-4">
                <div className="">
                    <h2 className="text-2xl font-bold">{data?.title} ({data?.itemCards?.length})</h2>
                </div>
                <div>
                    {/* <span onClick={() => setshowAccordion(!showAccordion)} className="cursor-pointer">🔽</span> */}
                    <span onClick={() => setCurrentAccordion()} className="cursor-pointer">🔽</span>
                </div>
            </div>
            {
                showAccordion && <div className="space-y-6">
                    {data?.itemCards.map((item) => (
                        <RestaurantItemcard key={item.card.info.id} data={item.card.info} />
                    ))}
                </div>
            }
        </div>
    )
}

export default RestaurantCategory;