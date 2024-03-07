
import "./globals.css";

 export default function Pfooter() {
  return (
    <div className="max-[1220px]:pl-[280px] max-[880px]:pl-[40px] pl-[28%] pt-[40px]">
        <div className="max-w-[1200px] ">
            <div className=" grid grid-rows-1 grid-flow-col max-[750px]:grid-rows-3 ">
                <div className="max-w-[150px]">
                    <a  className="font-bold text-[14px]">Contact</a><br/>
                    <a className="afooter" href="#">Contact support</a><br/>
                    <a className="afooter"  href="#" >Contact sales</a><br/>
                    <a className="afooter"  href="#" >Call sales: XXX XXX XX</a><br/>
                </div>
                <div className="max-w-[150px]">
                    <a className="font-bold text-[15px]" >What we do</a><br/>
                    <a className="afooter" href="#">Plans</a><br/>
                    <a className="afooter" href="#">Overview</a><br/>
                    <a className="afooter" href="#">Features</a><br/>
                    <a className="afooter" href="#">Network</a><br/>
                    <a className="afooter" href="#">Apps</a>
                </div>
                <div className="max-w-[150px]">
                    <a className="font-bold text-[15px]">Resources</a><br/>
                    <a className="afooter" href="#">Documentation</a><br/>
                    <a className="afooter" href="#">Blog</a><br/>
                    <a className="afooter" href="#">Case studies</a><br/>
                    <a className="afooter" href="#">Partners</a><br/>
                    <a className="afooter" href="#">Customers</a><br/>
                    <a className="afooter" href="#">API</a>
                </div>
                <div className="max-w-[150px]">
                    <a className="font-bold text-[15px]">Support</a><br/>
                    <a className="afooter" href="#">Knowledgebase</a><br/>
                    <a className="afooter" href="#">Community</a><br/>
                    <a className="afooter" href="#">System status</a><br/>
                    <a className="afooter" href="#">Trust & Safety</a>
                </div>
                <div className="max-w-[150px]">
                    <a className="font-bold text-[15px]" >About us</a><br/>
                    <a className="afooter" href="#">Our team</a><br/>
                    <a className="afooter" href="#">Careers</a><br/>
                    <a className="afooter" href="#">Press</a><br/>
                    <a className="afooter" href="#">Website Terms of Use</a><br/>
                    <a className="afooter" href="#">Self-serve Subscription Agreement</a><br/>
                    <a className="afooter" href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
  );
}
