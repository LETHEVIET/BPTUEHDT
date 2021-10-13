import Head from "next/head"
import Script from "next/script"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
    return(
        <>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
        </Head>
        <div>
            <Script strategy="beforeInteractive" type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.js"></Script>  
            <Script strategy="beforeInteractive" type="text/javascript" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>            
            <Script strategy="afterInteractive" type="text/javascript">
                AOS.init();
            </Script>
        </div>
        <Image width="1920" height="1080‬" src="https://i.imgur.com/vaMYwTn.png" style={{width:"100%"}} />
        <section id="gioithieu" >
            <div className="section" >
                <h1 className="small">BAN PHONG TRÀO - TÌNH NGUYỆN UEH</h1>
                <div className="flex5050 flex">
                    <div className="column1 column large " data-aos="fade-right">
                        <h1>BAN PHONG TRÀO - TÌNH NGUYỆN UEH</h1>
                        <p>
                            Ban Phong Trào - Tình Nguyện UEH là ban chuyên môn trực thuộc Đoàn thanh niên trường Đậi học Kinh tế TP.HCM, tiên phong trong việc tổ chức các hoạt động phong trào có quy mô cấp trường.
                        </p>
                        <h5>TIÊN PHONG - BẢN LĨNH - SÁNG TẠO</h5>
                        <p>Ban Phong trào - Tình nguyện UEH luôn là đầu tàu dẫn dắt trong hoạt động sinh viên UEH nói riêng và TP. HCM nói chung, không chỉ lớn mạnh về quy mô, chất lượng về phong trào mà còn mang sứ mệnh truyền tải những thông điệp ý nghĩa đến các thế hệ sinh viên.</p>
                    </div>

                    <div className="column2 column">
                        <div dangerouslySetInnerHTML={{ __html: `<img id="gioithieulogo" src = "/banphongtaologo.png" />` }} ></div>
                        
                    </div>
                </div>
                <div className="small textp" data-aos="fade-right">
                    <p>
                        Ban Phong Trào - Tình Nguyện UEH là ban chuyên môn trực thuộc Đoàn thanh niên trường Đậi học Kinh tế TP.HCM, tiên phong trong việc tổ chức các hoạt động phong trào có quy mô cấp trường.
                    </p>
                    <h5>TIÊN PHONG - BẢN LĨNH - SÁNG TẠO</h5>
                    <p>Ban Phong trào - Tình nguyện UEH luôn là đầu tàu dẫn dắt trong hoạt động sinh viên UEH nói riêng và TP. HCM nói chung, không chỉ lớn mạnh về quy mô, chất lượng về phong trào mà còn mang sứ mệnh truyền tải những thông điệp ý nghĩa đến các thế hệ sinh viên.</p></div>
            </div>
        </section>
        
        <section id="quatrinhhoatdong" >
            <div className="section"  style={{overflowX:"hidden"}}>
                <h1>QUÁ TRÌNH HOẠT ĐỘNG</h1>
                <div className="flex6040">
                    <div className="column1">
                        {/*<div dangerouslySetInnerHTML={{ __html: `<img id= "hinhquatrinh"src="/ZAN_4952.png" />`}}></div>*/}
                        <div id= "hinhquatrinh" >
                            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/0.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/1.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/2.png" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/3.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/4.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/5.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/6.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/7.jpg" />`}}></div>
                                <div className="hdimgc" dangerouslySetInnerHTML={{ __html: `<img src="/hoatdongimg/8.jpg" />`}}></div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="column2 large" data-aos="fade-left">
                        <p>Trải qua hơn 14 năm hình thành và phát triển, Ban Phong Trào - Tình nguyện UEH đã và đang khẳng định được vị trí của mình bởi số lượng sân chơi tạo ra cho các bạn sinh viên ngày càng nhiều, những hoạt động phong trào vô cùng sáng tạo cùng với đó là các sản phẩm âm nhạc, dự án cực kì thu hút sinh viên. Tất cả những điều đó luôn là động lực để "Ban Phong trào - Tình nguyện UEH" ngày càng đổi mới và phát triển hơn nữa.</p>
                    </div>
                </div>
                <div className="small textp" data-aos="fade-left" >
                    <p>Trải qua hơn 14 năm hình thành và phát triển, Ban Phong Trào - Tình nguyện UEH đã và đang khẳng định được vị trí của mình bởi số lượng sân chơi tạo ra cho các bạn sinh viên ngày càng nhiều, những hoạt động phong trào vô cùng sáng tạo cùng với đó là các sản phẩm âm nhạc, dự án cực kì thu hút sinh viên. Tất cả những điều đó luôn là động lực để "Ban Phong trào - Tình nguyện UEH" ngày càng đổi mới và phát triển hơn nữa.</p>
                </div>
            </div>
        </section>
        
        <section id="timkiemCTV" >
            <div className="section" >
                <div className="large">
                    <div className="flex7030" >
                        <div id="tkInfo">
                            <div id="tkcontent">
                                <div id="verTex" >
                                    <div dangerouslySetInnerHTML={{ __html: `<img id="CTVimg" data-aos="fade-down" src="/C T V.png" />`}}></div>
                                </div>
                                <div id="tkText">
                                    <p>Là chương trình tuyển CTV của Ban Phong trào - Tình nguyện UEH. Năm 2021, với chủ đề PRISMASTIC, chúng tôi mong muốn rằng sẽ tìm ra những người phù hợp, những bạn trẻ mang trong mình sắc trắng tinh khôi, thông qua lăng kính của BPT sẽ được thay đổi thành những màu sắc rực rỡ.</p>
                                    <h5>ĐỐI TƯỢNG THAM GIA</h5>
                                    <p>Sinh viên K46, K47 Hệ CQ của trường Đại học UEH có nguyện vọng trở thành một màu sắc của BPT</p>
                                </div>
                            </div>
                            <div id="tkTeams">
                                <div><h5>CÁC TEAM CẦN TUYỂN</h5></div>
                                <div id="tkTeamsList" >
                                    <div>
                                        <ul className="uL" >
                                            <li>Team Creative</li>
                                            <li>Team Truyền thông</li>
                                            <li>Team Kỹ thuật</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="uL" >
                                            <li>Team Videography</li>
                                            <li>Team Scenography</li>
                                            <li>Team HR</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tkImg" >
                            <div dangerouslySetInnerHTML={{ __html: `<img id="prismasticImg" src = "/Layer 26.png" />`}}></div>
                        </div>
                    </div>
                </div>
                <div className="small">
                    <div className="flex7030">
                        <div className="CTVteam" dangerouslySetInnerHTML={{ __html: `<img data-aos="fade-down" src="/C T V.png" />
                            <img src="/Group 7.png" />`}}>
                        </div>
                        
                        <div id="tkImg" >
                            <div dangerouslySetInnerHTML={{ __html: `<img id="prismasticImg" src = "/Layer 26.png" />`}}></div>
                        </div>
                    </div>
                    <div className="tkText textp">
                        <p>Là chương trình tuyển CTV của Ban Phong trào - Tình nguyện UEH. Năm 2021, với chủ đề PRISMASTIC, chúng tôi mong muốn rằng sẽ tìm ra những người phù hợp, những bạn trẻ mang trong mình sắc trắng tinh khôi, thông qua lăng kính của BPT sẽ được thay đổi thành những màu sắc rực rỡ.</p>
                        <h5>ĐỐI TƯỢNG THAM GIA</h5>
                        <p>Sinh viên K46, K47 Hệ CQ của trường Đại học UEH có nguyện vọng trở thành một màu sắc của BPT</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="prismastic"  >
            <div className="section" >
                <div className="large">
                    <div id="prismasticTitle"><h3>VỀ</h3> <h1>PRISMASTIC</h1></div>
                    <div id="prismasticContent">
                        <div className="col1 prisText">
                            <p id="prP1">
                                Xuất phát từ ý nghĩa ánh sáng trắng khi đi qua lăng kính sẽ được biến đổi màu sắc, chúng tôi muốn khẳng định rằng:
                            </p>
                            <p id="prP2">
                                Ban Phong trào chính là lăng kính giúp bạn kiếm tìm màu sắc thuộc về bản thân mình, và thuộc về chúng tôi. 
                            </p>
                        </div>
                        <div className="col2">
                            <div dangerouslySetInnerHTML={{ __html: `<img id="prismasticImg2" data-aos="fade" src="/Layer 18.png" />`}}></div>
                        </div>
                        <div className="col1 weird">
                            <div dangerouslySetInnerHTML={{ __html: `<img id="colorP" src="/Untitled-2.png" />`}}></div>
                            <h5>"NO WHERE BUT HERE
                                NO ONE BUT YOU"</h5>
                        </div>
                    </div>
                </div>

                <div className="small">
                    <div id="sPriTitle">
                        <div id="prismasticTitle">
                            <h3>VỀ</h3> <h1>PRISMASTIC</h1>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: `<img id="colorP" src="/Untitled-2.png" />`}}></div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: `<img id="prismasticImg2" data-aos="fade" src="/Layer 18.png" />`}}></div>
                    <div id="prisText" >
                        <p id="prP1">
                            Xuất phát từ ý nghĩa ánh sáng trắng khi đi qua lăng kính sẽ được biến đổi màu sắc, chúng tôi muốn khẳng định rằng:
                        </p>
                        <p id="prP2">
                            Ban Phong trào chính là lăng kính giúp bạn kiếm tìm màu sắc thuộc về bản thân mình, và thuộc về chúng tôi. 
                        </p>
                        <h5>"NO WHERE BUT HERE NO ONE BUT YOU"</h5>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="thoigian"  >
            <div className="section" >
                <h1>THỜI GIAN</h1>
                <div className="large">
                    <div id="timeline">
                        <ul id="topLine">
                            <li data-aos="zoom-in-up"  >
                                <div dangerouslySetInnerHTML={{ __html: `<img class="imgT" src="/tl1.png" />`}}></div>
                                <span className="dateT">15/10 - 25/10</span>
                            </li>
                            <li data-aos="zoom-in-up" data-aos-delay="300" >
                                <div dangerouslySetInnerHTML={{ __html: `<img class="imgT" src="/tl2.png" />`}}></div>
                                <span className="dateT">15/10 - 25/10</span>
                            </li>
                            <li data-aos="zoom-in-up" data-aos-delay="600" >
                                <div dangerouslySetInnerHTML={{ __html: `<img class="imgT" src="/tl3.png" />`}}></div>
                                <span className="dateT">15/10 - 25/10</span>
                            </li>
                        </ul>
                        <ul id="tl">
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                        </ul>
                        <ul id="bottomLine">
                            <li data-aos="zoom-in-down" >
                                <span className="roundT">VÒNG 1</span>
                                <span className="titleT">CV</span>
                            </li>
                            <li data-aos="zoom-in-down" data-aos-delay="300" >
                                <span className="roundT">VÒNG 2</span>
                                <span className="titleT">PHỎNG VẤN</span>                
                            </li>
                            <li data-aos="zoom-in-down" data-aos-delay="600" >
                                <span className="roundT">VÒNG 3</span>
                                <span className="titleT">TEAMWORK</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="small">
                    <div id="timeline">
                        <ul id="bottomLine">
                            <li data-aos="zoom-in-left" >
                                <span className="roundT">VÒNG 1</span>
                                <span className="titleT">CV</span>
                            </li>
                            <li data-aos="zoom-in-left" data-aos-delay="300" >
                                <span className="roundT">VÒNG 2</span>
                                <span className="titleT">PHỎNG VẤN</span>                
                            </li>
                            <li data-aos="zoom-in-left" data-aos-delay="600" >
                                <span className="roundT">VÒNG 3</span>
                                <span className="titleT">TEAMWORK</span>
                            </li>
                        </ul>
                        <ul id="tl">
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                        </ul>
                        <ul id="topLine">
                            <li data-aos="zoom-in-right"  >
                                <span className="dateT">15/10 - 25/10</span>
                                <div dangerouslySetInnerHTML={{ __html: `<img class="imgT" src="/tl1.png" />`}}></div>
                            </li>
                            <li data-aos="zoom-in-right" data-aos-delay="300" >
                                <span className="dateT">15/10 - 25/10</span>
                                <div dangerouslySetInnerHTML={{ __html: `<img class="imgT" src="/tl2.png" />`}}></div>
                            </li>
                            <li data-aos="zoom-in-right" data-aos-delay="600" >
                                <span className="dateT">15/10 - 25/10</span>
                                <div dangerouslySetInnerHTML={{ __html: `<img class="imgT" src="/tl3.png" />`}}></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="motayeucau"  >
            <div className="section" >
                <h1>MÔ TẢ & YÊU CẦU CÔNG VIỆC</h1>
                <div id="teamCreative" className="teamContainer">
                    <div className="teamTitle teamShader creativebg">
                        <h3>TEAM CREATIVE</h3>
                    </div>
                    <div className="team33">
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle creativebg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Lên ý tưởng và tổ chức các chương trình của Ban Phong trào
                                </li>
                                <li>
                                    Sáng tạo nội dung và tổ chức các chuỗi hoạt động phong trào online & offline của Hội - Sinh viên UEH
                                </li>
                                <li>
                                    Trao đổi, kết nối và làm việc với các đơn vị khác trong trường 
                                </li>
                                <li>
                                    Đổi mới sáng tạo và phát triển những chương trình mới mang tính đột phá. 
                                </li>
                            </ul>
                        </fieldset>
                        
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle creativebg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Có khả năng xây dựng chương trình, triển khai và đưa vào ứng dụng
                                </li>
                                <li>
                                    Tư duy sáng tạo, đột phá, không ngừng học hỏi, tiếp thu kiến thức mới.
                                </li>
                                <li>
                                    Có khả năng làm việc nhóm, quản lý thời gian, tự tin giao tiếp và trình bày ý tưởng lưu loát. 
                                </li>
                                <li>
                                    Có tinh thần tình nguyện và ý thức trách nhiệm, chịu được áp lực cao.
                                </li>
                                <li>
                                    Biết dẫn chương trình (MC) hoặc design cơ bản là một ưu thế
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <div className="subTeamTitle creativebg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Được training, trau dồi kiến thức liên quan đến sự kiện
                                </li>
                                <li>
                                    Được phát triển bản thân trong môi trường năng động, chuyên nghiệp
                                </li>
                                <li>
                                    Tăng cường kỹ năng giao tiếp và làm việc nhóm. 
                                </li>
                                <li>
                                    Rèn dũa tính sáng tạo, chủ động trong công việc
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </div>

                <div id="teamTrthong" className="teamContainer">
                    <div className="teamTitle teamShader trthongbg">
                        <h3>TEAM TRUYỀN THÔNG</h3>
                    </div>
                    <div className="team33">
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle trthongbg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Lập kế hoạch hoạt động cho các chiến dịch truyền thông ONLINE, OFFLINE
                                </li>
                                <li>
                                    Quản lý các nền tảng trực tuyến 
                                </li>
                                <li>
                                    (Facebook, instagram, TikTok,...)
                                </li>
                                <li>
                                    Lên nội dung, sáng tạo, thực hiện các chuỗi bài truyền thông cho Ban Phong trào - Tình nguyện và Đoàn - Hội UEH
                                </li>
                                <li>
                                    Lan tỏa, duy trì, nâng cao độ nhận diện hình ảnh của Ban Phong trào - Tình nguyện, Đoàn - Hội đến sinh viên trong và ngoài UEH.
                                </li>
                            </ul>
                        </fieldset>
                        
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle trthongbg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Có đam mê, yêu thích công việc viết lách
                                </li>
                                <li>
                                    Khả năng tương tác cao trên mạng xã hội cũng như biết các thao tác cơ bản về quản lý các nền tảng trực tuyến
                                </li>
                                <li>
                                    Linh hoạt, nhạy bén, nắm bắt được xu hướng, tin tức và sự kiện nổi bật trong xã hội
                                </li>
                                <li>
                                    Có khả năng sáng tạo, xây dựng nội dung là một lợi thế
                                </li>
                                <li>
                                    Có kiến thức cơ bản, bao quát ở nhiều lĩnh vực là một lợi thế
                                </li>
                                <li>
                                    Dấn thân, không ngại khó, chịu được áp lực công việc
                                </li>
                                <li>
                                    Nghiêm túc, có trách nhiệm trong công việc, tinh thần đồng đội cao.
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <div className="subTeamTitle trthongbg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Được học hỏi và trải nghiệm môi trường làm việc năng động, chuyên nghiệp hàng đầu UEH
                                </li>
                                <li>
                                    Được training các kiến thức liên quan đến lĩnh vực truyền thông
                                </li>
                                <li>
                                    Rèn luyện sự chủ động, sáng tạo trong công việc
                                </li>
                                <li>
                                    Trau dồi thêm kỹ năng mềm và phát triển bản thân.
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </div>

                <div id="teamKythuat" className="teamContainer">
                    <div className="teamTitle teamShader kythuatbg">
                        <h3>TEAM KỸ THUẬT</h3>
                    </div>
                    <div className="team33">
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle kythuatbg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Thiết kế, chỉnh sửa các ấn phẩm truyền thông phục vụ cho việc xây dựng fanpage và các ấn phẩm truyền thông khác.
                                </li>
                                <li>
                                    Đóng góp ý tưởng trong việc hoàn thiện hình ảnh thu hút sinh viên
                                </li>
                                <li>
                                    Chỉnh sửa và xử lý nhanh hình ảnh trước những phản hồi
                                </li>
                                <li>
                                    Làm việc với các team để tạo ra ấn phẩm cuối cùng
                                </li>
                            </ul>
                        </fieldset>
                        
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle kythuatbg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                            </legend>
                            <ul>
                                <li> 
                                    Mắt thẩm mỹ và tinh tế
                                </li>
                                <li>
                                    Sử dụng tốt ít nhất một phần mềm thiết kế (Ps,Ai,Coreldraw,..). 
                                </li>
                                <li>
                                    Có tính chủ động trong công việc
                                </li>
                                <li>
                                    Có kiến thức tốt về phối màu và bố cục.
                                </li>
                                <li>
                                    Sáng tạo bắt kịp xu hướng
                                </li>
                                <li>
                                    Khả năng làm việc có phương pháp và đáp ứng deadline
                                </li>
                                <li>
                                    Có khả năng vẽ digital là một lợi thế
                                </li>
                                <li>
                                    Có kinh nghiệm là một lợi thế
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <div className="subTeamTitle kythuatbg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Cơ hội làm việc trong một môi trường thực tiễn, chuyên nghiệp
                                </li>
                                <li>
                                    Được training thêm các kỹ năng mới trong lĩnh vực
                                </li>
                                <li>
                                    Nâng cao khả năng của bản thân
                                </li>
                                <li>
                                    Rèn luyện tính chủ động trong công việc.
                                </li>
                                <li>
                                    Được trải nghiệm sử dụng, điều chỉnh dàn âm thanh và màn hình led hỗ trong quá trình chạy chương trình.
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </div>

                <div id="teamSceno" className="teamContainer">
                    <div className="teamTitle teamShader scenobg">
                        <h3>TEAM SCENOGRAPHY</h3>
                    </div>
                    <div className="team33">
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle scenobg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Thiết kế sân khấu, hệ thống âm thanh, ánh sáng.
    
                                </li>
                                <li>
                                    Vạch ra các phương án bố trí, trang trí trong các sự kiện.
                                </li>
                                <li>
                                    Thiết kế và dàn dựng các khung cảnh.
                                </li>
                                <li>
                                    Tìm kiếm địa điểm, góc quay.
                                </li>
                                <li>
                                    Làm trò chơi, quản trò, lửa trại,…
                                </li>
                            </ul>
                        </fieldset>
                        
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle scenobg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                            </legend>
                            <ul>
                                <li> 
                                    Có khiếu thẩm mỹ và sự khéo léo.
                                </li>
                                <li>
                                    Có khả năng làm việc với các vật liệu trang trí và dựng sân khấu.
                                </li>
                                <li>
                                    Có tính kiên nhẫn, sự tinh tế và chủ động trong làm việc.
                                </li>
                                <li>
                                    Có tinh thần dấn thân, không ngại khó, Có khả năng chịu áp lực công việc.
                                </li>
                                <li>
                                    Có tinh thần đồng đội, teamwork tốt.
                                </li>
                                <li>
                                    Sử dụng cơ bản các phần mềm thiết kế 
                                </li>
                                <li>
                                    Có hiểu biết về thiết kế và dàn dựng sân khấu ảo (Virtual Stage) là một lợi thế.
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <div className="subTeamTitle scenobg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Được thỏa sức sáng tạo.
                                    
                                </li>
                                <li>
                                    Được làm việc trong môi trường chuyên nghiệp.
                                </li>
                                <li>
                                    Phát triển khả năng xây dựng và bố trí vật liệu.
                                </li>
                                <li>
                                    Phát triển kỹ năng giao tiếp và làm việc nhóm.
                                </li>
                                <li>
                                    Khả năng quản lý, sắp xếp công việc.
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </div>

                <div id="teamVideo" className="teamContainer">
                    <div className="teamTitle teamShader vdbg">
                        <h3>TEAM videography</h3>
                    </div>
                    <div className="team22">
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>BỘ PHẬN 1 <br/>SCREENWRITER</h4>
                                </div>
                            </legend>
                            <div className="vdC">
                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                                <ul>
                                    <li>
                                        Lên ý tưởng và dựng, viết kịch bản chi tiết cho các sản phẩm điện ảnh.                                 
                                    </li>
                                    <li>
                                        Điều phối các buổi quay phim, chụp ảnh.
                                    </li>
                                </ul>

                                
                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                                <ul>
                                    <li>
                                        Có khả năng biên kịch hoặc viết content.
                                    </li>
                                    <li>
                                        Có khả năng chuyển thể từ văn bản sang hình ảnh. 
                                    </li>
                                    <li>
                                        Tư duy sáng tạo, táo bạo.
                                    </li>
                                    <li>
                                        Có khả năng giao tiếp, trình bày tốt. 
                                    </li>
                                    <li>
                                        Có trách nhiệm trong công việc.
                                    </li>
                                </ul>

                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                                <ul>
                                    <li>
                                        Được phát triển bản thân trong môi trường chuyên nghiệp.
                                    </li>
                                    <li>
                                        Tăng cường kỹ năng giao tiếp và làm việc nhóm.
                                    </li>
                                    <li>
                                        Rèn dũa tính sáng tạo, chủ động trong công việc.
                                    </li>
                                    <li>
                                        Được training, trao dồi kiến thức về mảng điện ảnh
                                    </li>
                                </ul>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>BỘ PHẬN 1 <br/>SCREENWRITER</h4>
                                </div>
                            </legend>
                            <div className="vdC">
                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                                <ul>
                                    <li>
                                        Lên ý tưởng và dựng, viết kịch bản chi tiết cho các sản phẩm điện ảnh.                                 
                                    </li>
                                    <li>
                                        Điều phối các buổi quay phim, chụp ảnh.
                                    </li>
                                </ul>

                                
                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                                <ul>
                                    <li>
                                        Có khả năng biên kịch hoặc viết content.
                                    </li>
                                    <li>
                                        Có khả năng chuyển thể từ văn bản sang hình ảnh. 
                                    </li>
                                    <li>
                                        Tư duy sáng tạo, táo bạo.
                                    </li>
                                    <li>
                                        Có khả năng giao tiếp, trình bày tốt. 
                                    </li>
                                    <li>
                                        Có trách nhiệm trong công việc.
                                    </li>
                                </ul>

                                <div className="subTeamTitle vdbg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                                <ul>
                                    <li>
                                        Được phát triển bản thân trong môi trường chuyên nghiệp.
                                    </li>
                                    <li>
                                        Tăng cường kỹ năng giao tiếp và làm việc nhóm.
                                    </li>
                                    <li>
                                        Rèn dũa tính sáng tạo, chủ động trong công việc.
                                    </li>
                                    <li>
                                        Được training, trao dồi kiến thức về mảng điện ảnh
                                    </li>
                                </ul>
                            </div>
                        </fieldset>
                    </div>
                </div>
                
                <div id="teamHR" className="teamContainer">
                    <div className="teamTitle teamShader hrbg">
                        <h3>TEAM HR</h3>
                    </div>
                    <div className="team33">
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle hrbg teamShader">
                                    <h4>CÔNG VIỆC</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Truyền thông nội bộ 
                                </li>
                                <li>
                                    Nắm bắt tình hình nhân sự từng team, điều phối/góp ý thành phần nhân sự theo dự án, chương trình.
                                </li>
                                <li>
                                    Kiểm soát tiến trình công việc chung cũng như của từng thành viên, từ đó đo lường độ hiệu quả trong công việc của từng cá nhân và thành công chung trong chương trình
                                </li>
                                <li>
                                    Phụ trách hoạt động tuyển dụng nhân sự mới.
                                </li>
                            </ul>
                        </fieldset>
                        
                        <fieldset>
                            <legend>
                                <div className="subTeamTitle hrbg teamShader">
                                    <h4>YÊU CẦU</h4>
                                </div>
                            </legend>
                            <ul>
                                <li> 
                                    Có khả năng giao tiếp tốt 
                                    
                                </li>
                                <li>
                                    Cẩn thận, tỉ mỉ trong công việc, kỹ năng phân tích tốt
                                </li>
                                <li>
                                    Kỹ năng tổ chức tốt, tháo vát và có khả năng đa nhiệm trong công việc
                                </li>
                                <li>
                                    Kỹ năng quản lý và làm việc nhóm tốt
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <div className="subTeamTitle hrbg teamShader">
                                    <h4>QUYỀN LỢI</h4>
                                </div>
                            </legend>
                            <ul>
                                <li>
                                    Được training, trau dồi kiến thức liên quan đến nhân sự
                                </li>
                                <li>
                                    Được phát triển bản thân trong môi trường năng động, chuyên nghiệp
                                </li>
                                <li>
                                    Tham gia, quản lý các chương trình lớn trong UEH
                                </li>
                                <li>
                                    Tăng cường kỹ năng và kinh nghiệm vận hành tổ chức.
                                </li>
                                <li>
                                    Có cơ hội gặp gỡ, giao lưu với các anh chị, bạn bè cùng sở thích, mở rộng mối quan hệ cá nhân.
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="chitietvongCV"  >
            <div className="section" >
                <div id="chitietTitle" >
                    <div id="bigtitle" > <h1>CHI TIẾT&nbsp;</h1><h1>VÒNG CV&nbsp;</h1> </div>
                    <h4>15/10 - 25/10</h4>
                </div>
                <div id="chitietContainer">
                    <div id="chitietTex">
                        <h6>Ứng viên nộp 2 file như sau:</h6>
                        <p>
                            <b>1.</b> CV giới thiệu bản thân (có thể làm CV dựa trên mẫu có sẵn, PowerPoint, Video,...) <br/>
                            <b>2.</b> Trả lời file câu hỏi theo từng Team tương ứng (link câu hỏi ở bên cạnh) bằng bất kỳ hình thức nào, miễn có thể thể hiện được cá tính, sự sáng tạo và chất riêng của bản thân. 
                        </p>
                        <h6>Lưu bài dự thi theo cú pháp: </h6>
                        <p>[HỌ VÀ TÊN][CV] hoặc [HỌ VÀ TÊN][TRẢ LỜI CÂU HỎI] </p>
        
                        <p>Sau khi thực hiện xong 2 yêu cầu trên, ứng viên vui lòng gửi 2 file vào link nộp bài dự thi (link ở bên cạnh). Đồng thời cập nhật tin tức trên Fanpage (gắn link vào đây nhe) tại đây để biết được kết quả sớm nhất!</p>
                    </div>
                    <div id="chitietQ">
                        <div dangerouslySetInnerHTML={{ __html: `<img src="/LINKCV.png" /> <img src="/LINKQ.png" />`}}>
                        </div>
                        
                        <h2>NOW OR NERVER<br/>GOODLUCK!</h2>
                    </div>
                </div>
                <p>Nếu có thắc mắc, xin vui lòng liên hệ chúng tôi qua các phương thức bên dưới để được hỗ trợ tốt nhất</p>
            </div>
        </section>
        
        <section id="lienhe" >
            <div className="section" >
                <div id="cline">
                    <h4>Liên hệ Ban Phong trào - Tình nguyện UEH</h4>
                    <div id="contact">
                        <div dangerouslySetInnerHTML={{ __html: `<img class="cimg" src="/2055904.png"/>`}}></div>
                        <div dangerouslySetInnerHTML={{ __html: `<img class="cimg" src="/mail.png"/>`}}></div>                        
                        <div dangerouslySetInnerHTML={{ __html: `<img class="cimg" src="/face.png"/>`}}></div>                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}