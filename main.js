ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

function App() {
    const fname = "Mill"
    const lname = "Pan"
    const bdate = new Date('1995-01-15')
    const cdate = new Date()
    const diff = (cdate - bdate)/(1000*3600*24)
    let ageY = Math.trunc(diff/365.25)
    let ageM = cdate.getMonth - bdate.getMonth > 0? cdate.getMonth - bdate.getMonth: ageY-=1
    let ageD = cdate.getDay - bdate.getDay > 0? cdate.getDay - bdate.getDay: ageM-=1
    console.log(ageD)
    console.log(ageM)

    const nameSt = {
        color:'teal'
    }
    const ageSt = {
        color:'tomato'
    }

    
    return (
        <div>
            <h1 style={nameSt}>Name:{fname}, Surname: {lname}</h1>
            <h1 style={ageSt}>age:{ageY} Y, {Math.trunc(ageM)} M, {Math.trunc(ageD)} D</h1>
        </div>
    )
}