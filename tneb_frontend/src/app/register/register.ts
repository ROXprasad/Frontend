export const countryCodes: { code: string; name: string }[] = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+91', name: 'India' },
    { code: '+61', name: 'Australia' },
    { code: '+81', name: 'Japan' },
    // Add more country codes as needed
  ];
  export const emailval: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const numberval: RegExp = /^(?:\+91|91)?[789]\d{9}$/;