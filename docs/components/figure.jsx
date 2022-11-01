import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption }) {
  return (
    <figure style={{ border: 0, padding: 0, textAlign: "center", fontStyle: 'italic', }}>
      <img src={useBaseUrl(src)} alt={caption} />
      <figcaption>{`${caption}`}</figcaption>
    </figure>
  )
}