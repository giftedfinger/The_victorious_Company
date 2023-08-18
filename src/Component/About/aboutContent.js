  import img1   from './about_img/WhoweAreImg.jpeg'
import img2 from './about_img/where_we_come_From.jpeg'
import img3 from './about_img/includesive.jpeg'
import img4 from './about_img/inclusive3.jpeg'

const aboutContent = [{
  layout: 'rightflex',
  title: '01',
  content: `We are The Victorios company (TVC), where God's love and grace dwell. At RCCG Victorios Company, we are a community of
   believers united by our faith in Jesus Christ. `,
  AboutTextStyle: 'About_text',
  ABoutImgStyle: 'ABoutImgStyle',
  AboutImg:img1,  
 imgClass:'img_container_who_we_are',
    mision:[]
}, 

{
  layout: 'leftFlext',
  title: '02',
  content: `TVC was established as a place of worship and fellowship, born out of a deep desire to create a space where people could gather 
  to seek God, find support, and grow in their faith.`,
  AboutTextStyle: 'About_text',
   ABoutImgStyle: 'ABoutImgStyle',
  AboutImg:img2,
   imgClass:'img_where_we_come_From',
    mision:[]

}, 

{
  layout: 'rightflex',
  title: '03',
  content: ` Our mission and Vision are:`,

  mision:[' To make heaven.', " To take as many people as possible with us.","To have a member of RCCG in every family of all nations."]
,
  AboutTextStyle: 'About_text',
  ABoutImgStyle: 'ABoutImgStyle',
  AboutImg:img3,
    imgClass:'img_our_vision'
}, 

// 

{
  layout: 'leftFlext',
  title: '04',
  content: `Ultimately, what this means to you is a deep sense of belonging, spiritual growth, purpose, and connection within the fold, grow in faith, and contribute to a greater purpose.`,
  AboutTextStyle: 'About_text',
     ABoutImgStyle: 'ABoutImgStyle',
      AboutImg:img4,
    imgClass:'img_inclusive',
       mision:[]

}];

 
 

export default aboutContent