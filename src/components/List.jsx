import Link from "next/link"

const List =(props)=>{
    const profile = props.profile
    const ner = props.ner
    const job = props.job
return (<div className="box">
    <img className="profile" src={profile}/>
    <div className="nameJob">
       <Link href={`/info`}><div>{ner}</div></Link>
        <div>{job}</div>
    </div>
</div>)
}
export default List;