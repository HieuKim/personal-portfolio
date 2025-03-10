
import {workExperience} from '../api/experience';
import CustomImage from './_image';
export default function Experience()
{
    return (

<div className="lg:p-10 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1  m-8 gap-6">

{
workExperience.map(( exp, idx ) => (
 
<div key = {idx} className="max-w-screen rounded border shadow-lg bg-gradient-to-t from-slate-500 to-slate-700 hover:scale-110 duration-300">
<a href={exp.url} target="_blank" className="flex justify-center md:justify-center">
  <CustomImage className="w-full p-5" imagePath={exp.logo} width={exp.width} height={exp.height} alt="companyLogo" />
</a>
<div key = {idx} className="px-6 py-4">
  <div key = {idx} className="flex flex-row flex-nowrap gap-4">
  <div key = {idx} className="font-bold text-md mb-2">
    {exp.title}
    </div>
    <div className="font-bold text-md mb-2">
    {exp.from} - {exp.to}
    </div>
    </div>
  <ul className="text-gray-200 text-sm">
   {exp.desc.map((role, idx)=>
   <li className = "list-disc" key = {idx}>{role}</li>
   )}  </ul>
</div>
{/*<div className="px-6 pt-4 pb-2">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#.NET</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Python</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Django</span>

</div>*/}
</div>


        ))
        }

</div>
 )
}