import { useGetCat } from "../src/useGetCat"

export const Cat = () => {

    const { data, refetchData, isCatLoading} = useGetCat();

    if(isCatLoading) return <h1> loading... </h1>
    return (
        <div>
            <button onClick={refetchData}> refetch </button>
            <h1> {data?.fact} </h1>
        </div>
    )
}