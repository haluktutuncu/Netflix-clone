export default function Footer() {
  return (
    <div className="w-full h-[360px] bg-black flex items-center justify-center flex-col text-[rgb(177,168,168)]   ">
      <div className="flex-none translate-x-[-435px] mb-[20px]">
        <a href="https://help.netflix.com/contactus">Questions? Contact us.</a>
      </div>
      <div className="grid grid-cols-4 gap-[125px] text-[14px] scale-110 underline">
        <div className="col-span-1">
          <ul className="space-y-2">
            <li>
              <a href="https://help.netflix.com/support/412">FAQ</a>
            </li>
            <li>
              <a href="https://help.netflix.com">Help Center</a>
            </li>
            <li>
              <a href="/youraccount">Account</a>
            </li>
            <li>
              <a href="https://media.netflix.com/">Media Center</a>
            </li>
          </ul>
        </div>
        <div class="col-span-1">
          <ul class="space-y-2">
            <li>
              <a href="http://ir.netflix.com/">Investor Relations</a>
            </li>
            <li>
              <a href="https://jobs.netflix.com/jobs">Jobs</a>
            </li>
            <li>
              <a href="/redeem">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="/watch">Ways to Watch</a>
            </li>
          </ul>
        </div>
        <div class="col-span-1">
          <ul class="space-y-2">
            <li>
              <a href="https://help.netflix.com/legal/termsofuse">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/privacy">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/corpinfo">
                Corporate Information
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-1">
          <ul class="space-y-2">
            <li>
              <a href="https://help.netflix.com/contactus">Contact Us</a>
            </li>
            <li>
              <a href="https://fast.com">Speed Test</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
            </li>
            <li>
              <a href="https://www.netflix.com/tr-en/browse/genre/839338">
                Only on Netflix
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex  items-center translate-x-[-420px] translate-y-[30px]">
        <div className="border rounded-[4px] border-neutral-500 focus:border-gray-500 outline-none ">
          <div className="absolute logo-translate translate-y-[7px] translate-x-1 px-5 pl-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Languages"
              aria-hidden="true"
            >
              <path
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <select className=" outline-none appearance-none flex items-center justify-center bg-transparent  text-white py-[4px] px-7 border-none text-right">
            <option>English</option>
            <option>Deutsch</option>
          </select>
        </div>
        <div className="absolute translate-x-[95px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="CaretDown"
            aria-hidden="true"
          >
            <path
              d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
        <p className="translate-y-[50px] translate-x-[-115px] text-sm my-[30px] ">
          Netflix Turkey
        </p>
      </div>
    </div>
  );
}
