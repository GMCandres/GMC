import { useState } from "react"

function loadImages(globObj) {
  return Object.entries(globObj)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, file]) => file.default)
}

const balgowlahGallery = loadImages(
  import.meta.glob(
    "../assets/projectBalgowhlah/*.{jpg,jpeg,png,webp}",
    { eager: true }
  )
)

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  function previousImage() {
    setCurrentImage((currentImage - 1 + balgowlahGallery.length) % balgowlahGallery.length)
  }

  function nextImage() {
    setCurrentImage((currentImage + 1) % balgowlahGallery.length)
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">
              Selected projects
            </h2>

            <p className="mt-2 text-slate-600">
              A selection of recent GMC Solutions projects.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden md:inline rounded-xl bg-slate-900 text-white px-4 py-2"
          >
            Discuss your project
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <button
            type="button"
            onClick={() => {
              setCurrentImage(0)
              setIsOpen(true)
            }}
            className="text-left rounded-2xl overflow-hidden border bg-white"
          >
            <img
              src={balgowlahGallery[0]}
              alt="Balgowlah Commercial Fitout"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="font-semibold">
                Balgowlah Commercial Fitout
              </h3>

              <p className="text-sm text-slate-600">
                Balgowlah • Commercial Joinery • 2026
              </p>

              <p className="mt-3 text-sm font-semibold">
                View project
              </p>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-5xl">
            <div className="flex items-center justify-between p-4">
              <h3 className="font-semibold text-lg">
                Balgowlah Commercial Fitout
              </h3>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-2xl px-3"
              >
                ×
              </button>
            </div>

            <div className="relative bg-black">
              <img
                src={balgowlahGallery[currentImage]}
                alt={`Balgowlah project ${currentImage + 1}`}
                className="w-full h-[65vh] object-contain"
              />

              {balgowlahGallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2 text-2xl"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2 text-2xl"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <p className="text-center p-3 text-sm text-slate-600">
              {currentImage + 1} of {balgowlahGallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
