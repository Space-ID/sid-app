import React from 'react'

export default function DiscordIcon({
  className = 'text-green-200',
  size = 24,
}) {
  return (
    <div className={className}>
      <svg
        width={size}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.90011 3.36279H17.8813C18.8917 3.36279 19.7143 4.18606 19.7143 5.20619V21.2598L17.7919 19.5596L16.71 18.5574L15.5656 17.4925L16.0394 19.148H5.90011C4.88975 19.148 4.06716 18.3247 4.06716 17.3046V5.20619C4.06716 4.18606 4.88975 3.36279 5.90011 3.36279ZM13.8399 14.3247C14.1081 14.6648 14.43 15.0496 14.43 15.0496C16.406 14.9869 17.166 13.6894 17.166 13.6894C17.166 10.808 15.8785 8.4724 15.8785 8.4724C14.591 7.50596 13.366 7.5328 13.366 7.5328L13.2408 7.67598C14.7609 8.1413 15.4672 8.81244 15.4672 8.81244C14.5373 8.30238 13.6253 8.05182 12.7759 7.95338C12.1321 7.8818 11.5152 7.89969 10.9698 7.97128C10.9229 7.97128 10.8829 7.9781 10.8378 7.98579C10.8313 7.9869 10.8246 7.98804 10.8178 7.98918C10.5048 8.01602 9.74483 8.13235 8.78812 8.55293C8.4573 8.70506 8.26059 8.81244 8.26059 8.81244C8.26059 8.81244 9.00271 8.10551 10.6121 7.64019L10.5227 7.5328C10.5227 7.5328 9.29777 7.50596 8.01024 8.4724C8.01024 8.4724 6.7227 10.808 6.7227 13.6894C6.7227 13.6894 7.47376 14.9869 9.44977 15.0496C9.44977 15.0496 9.7806 14.6469 10.0488 14.3068C8.9133 13.9668 8.48412 13.2509 8.48412 13.2509C8.48412 13.2509 8.57353 13.3135 8.73447 13.403C8.74342 13.412 8.75236 13.4209 8.77024 13.4299C8.78365 13.4388 8.79706 13.4455 8.81047 13.4522C8.82389 13.459 8.8373 13.4657 8.85071 13.4746C9.07424 13.5999 9.29777 13.6983 9.50342 13.7789C9.87001 13.922 10.3081 14.0652 10.8178 14.1637C11.4884 14.2889 12.2752 14.3337 13.1336 14.1726C13.5538 14.101 13.983 13.9757 14.43 13.7878C14.743 13.6715 15.0917 13.5015 15.4583 13.2599C15.4583 13.2599 15.0112 13.9936 13.8399 14.3247ZM9.36045 11.8641C9.36045 11.3183 9.7628 10.8708 10.2725 10.8708C10.7821 10.8708 11.1934 11.3183 11.1845 11.8641C11.1845 12.41 10.7821 12.8574 10.2725 12.8574C9.77175 12.8574 9.36045 12.41 9.36045 11.8641ZM12.624 11.8641C12.624 11.3183 13.0263 10.8708 13.536 10.8708C14.0456 10.8708 14.448 11.3183 14.448 11.8641C14.448 12.41 14.0456 12.8574 13.536 12.8574C13.0353 12.8574 12.624 12.41 12.624 11.8641Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
