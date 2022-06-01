import Banner from "../src/components/Banner";
import Bismillah from "../src/components/Bismillah";
import Verses from "../src/components/Verses";
import Wrapper from "../src/components/Wrapper";

export default function Surah(){
    return (
        <Wrapper>
            <Banner isInSurah={true}/>
            <Bismillah/>
            <Verses/>
        </Wrapper>
    )
}