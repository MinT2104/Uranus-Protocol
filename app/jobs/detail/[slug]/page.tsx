"use client";

import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { JobApplication } from "@/components/JobApplication";
const JobDetail = () => {
  const router = useRouter();
  const [isApplication, setIsApplication] = useState<boolean>(false);
  return (
    <section className="relative w-full scrollbar bg-primary h-fit text-black pt-40 pb-20 flex flex-col gap-4">
      {isApplication && <JobApplication setIsApplication={setIsApplication} />}
      <div className="w-1/2 h-fit bg-white rounded-[12px] border mx-auto p-4">
        <div
          onClick={() => router.push("/jobs")}
          className="flex gap-2 py-2 items-center cursor-pointer hover:bg-slate-200 p-1 px-4 w-fit rounded"
        >
          <ArrowBackRoundedIcon
            sx={{ fontSize: 30 }}
            className=" rounded-full cursor-pointer"
          />
          <span>Back</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium text-[32px]">
            PHP Developer Thu Nhập Đến 22 Triệu
          </span>
          <span className="text-noSelected">Release at 20 minutes ago</span>
          <button
            onClick={() => setIsApplication(true)}
            className="w-1/3 p-3 px-6 rounded bg-pink-500 text-white my-4"
          >
            Apply now
          </button>
        </div>
        <hr />
        <div>
          <div className="w-full py-4 flex gap-4 items-center">
            <PaidRoundedIcon
              sx={{ fontSize: 40 }}
              className="text-pink-600 bg-pink-200 p-2 rounded-full"
            />
            <span className="font-bold text-[20px]">2500.000$</span>
          </div>
        </div>
        <hr />
        <div className="py-4">
          <h1 className="font-bold text-[20px]">Description</h1>
          <p className=" px-4 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            fusce ut placerat orci nulla pellentesque dignissim. Aliquet nibh
            praesent tristique magna sit amet. Leo urna molestie at elementum eu
            facilisis. Dui nunc mattis enim ut tellus elementum. Parturient
            montes nascetur ridiculus mus. Facilisi nullam vehicula ipsum a arcu
            cursus vitae congue mauris. Vel pretium lectus quam id leo in vitae
            turpis. Aenean pharetra magna ac placerat vestibulum. Amet massa
            vitae tortor condimentum lacinia quis. Et odio pellentesque diam
            volutpat commodo sed egestas egestas. Non pulvinar neque laoreet
            suspendisse interdum consectetur libero id faucibus. Sit amet
            commodo nulla facilisi nullam vehicula ipsum. Elit duis tristique
            sollicitudin nibh sit amet commodo. Eros in cursus turpis massa
            tincidunt dui ut ornare lectus. Feugiat nisl pretium fusce id velit
            ut. Vestibulum morbi blandit cursus risus at ultrices mi tempus. In
            ante metus dictum at tempor commodo. Dignissim convallis aenean et
            tortor at risus viverra adipiscing at. Id semper risus in hendrerit
            gravida rutrum. Arcu vitae elementum curabitur vitae nunc sed.
            Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare
            massa eget. Magna eget est lorem ipsum. Praesent elementum facilisis
            leo vel fringilla est ullamcorper. Cursus vitae congue mauris
            rhoncus aenean vel elit. Id aliquet risus feugiat in ante metus
            dictum. Pharetra diam sit amet nisl suscipit adipiscing bibendum est
            ultricies. Et netus et malesuada fames ac. Sit amet nisl purus in
            mollis. Pellentesque elit ullamcorper dignissim cras. Id semper
            risus in hendrerit gravida. Lorem ipsum dolor sit amet consectetur
            adipiscing. Sit amet mattis vulputate enim nulla aliquet porttitor.
            Orci sagittis eu volutpat odio facilisis mauris. Scelerisque purus
            semper eget duis at tellus at urna. Nibh mauris cursus mattis
            molestie a iaculis at erat. Justo nec ultrices dui sapien eget mi
            proin sed. Rhoncus dolor purus non enim praesent elementum.
            Fringilla ut morbi tincidunt augue interdum velit euismod in. Lacus
            vestibulum sed arcu non odio euismod. In eu mi bibendum neque
            egestas congue quisque egestas diam. Vel orci porta non pulvinar
            neque laoreet suspendisse interdum consectetur. Ultrices in iaculis
            nunc sed augue lacus viverra vitae congue. Et leo duis ut diam quam
            nulla porttitor.
          </p>
        </div>
        <button className="p-3 mt-10 text-white rounded bg-pink-500 w-full">
          Apply now
        </button>
      </div>
    </section>
  );
};
export default JobDetail;
