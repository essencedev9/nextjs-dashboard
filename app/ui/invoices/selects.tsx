'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Select() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('status', term);
    } else {
      params.delete('status');
    }
    
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <select
        id="customer"
        name="customerId"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        defaultValue=""
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      >
        <option value="">all</option>
        <option value="paid">paid</option>
        <option value="pending">pending</option>
      </select>
    </div>
  );
}
