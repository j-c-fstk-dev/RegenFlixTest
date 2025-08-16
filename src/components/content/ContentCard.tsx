import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  type: "video" | "course" | "pdf";
  duration?: string;
  progress?: number;
  isPremium?: boolean;
  href: string;
  className?: string;
  instructor?: string;
  rating?: number;
  studentsCount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function ContentCard({
  id,
  title,
  description,
  coverImage,
  type,
  duration,
  progress,
  isPremium,
  href,
  className,
  instructor,
  rating,
  studentsCount,
  isNew,
  isFeatured
}: ContentCardProps) {
  const typeLabels = {
    video: "Vídeo",
    course: "Curso",
    pdf: "PDF"
  };

  const typeIcons = {
    video:
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="2sc2yc4">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        data-oid="2c2iql8" />

      </svg>,


    course:
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="6gwebe4">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
        data-oid="sw5w9rm" />

      </svg>,


    pdf:
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      data-oid="z6a6m:-">

        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        data-oid="zt8i--7" />

      </svg>

  };

  return (
    <Link href={href} className="block group" data-oid="v6r99cx">
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-regen-hover hover:-translate-y-1",
          isFeatured && "ring-2 ring-primary-300 ring-opacity-50",
          className
        )}
        data-oid="4wuvdth">

        <div
          className="relative aspect-video overflow-hidden"
          data-oid="9udw0t4">

          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-oid="1-l21f5" />


          {/* Overlay gradient for better text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="wq1vds9" />


          {/* Top badges */}
          <div
            className="absolute top-3 left-3 flex flex-wrap gap-2"
            data-oid="gj2itax">

            <Badge
              variant="secondary"
              size="sm"
              className="bg-black/70 text-white backdrop-blur-sm"
              data-oid="y5s402r">

              <span className="flex items-center gap-1" data-oid="dhoep_9">
                {typeIcons[type]}
                {typeLabels[type]}
              </span>
            </Badge>

            {isNew &&
            <Badge
              variant="info"
              size="sm"
              className="bg-info text-white"
              data-oid="io1xl_4">

                Novo
              </Badge>
            }

            {isFeatured &&
            <Badge
              variant="warning"
              size="sm"
              className="bg-accent-gold text-black font-semibold"
              data-oid="a6cf5bc">

                ⭐ Destaque
              </Badge>
            }
          </div>

          {/* Premium badge */}
          {isPremium &&
          <div className="absolute top-3 right-3" data-oid=".usfiuk">
              <Badge
              variant="warning"
              size="sm"
              className="bg-accent-gold text-black font-semibold"
              data-oid="1mjwn8f">

                Premium
              </Badge>
            </div>
          }

          {/* Duration */}
          {duration &&
          <div className="absolute bottom-3 right-3" data-oid="jy8zc-h">
              <Badge
              variant="secondary"
              size="sm"
              className="bg-black/70 text-white backdrop-blur-sm"
              data-oid="jzfw.s5">

                {duration}
              </Badge>
            </div>
          }

          {/* Play button overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="93lkggp">

            <div
              className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300"
              data-oid="4jmc8ws">

              <svg
                className="w-8 h-8 text-primary-300 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                data-oid="dzxzgvb">

                <path d="M8 5v14l11-7z" data-oid="ay2pea1" />
              </svg>
            </div>
          </div>

          {/* Progress bar */}
          {progress !== undefined && progress > 0 &&
          <div
            className="absolute bottom-0 left-0 right-0"
            data-oid="dzxzmw_">

              <ProgressBar
              progress={progress}
              size="sm"
              color="secondary"
              className="rounded-none"
              data-oid="g81z1i9" />

            </div>
          }
        </div>

        <CardContent className="p-4" data-oid="vm5ikj6">
          {/* Title */}
          <h3
            className="text-heading font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors"
            data-oid="v8hnxhq">

            {title}
          </h3>

          {/* Instructor */}
          {instructor &&
          <p
            className="text-body text-sm text-primary-300 mb-2 font-medium"
            data-oid="ih.w4z8">

              Por {instructor}
            </p>
          }

          {/* Description */}
          <p
            className="text-body text-sm text-neutral-medium-gray line-clamp-3 mb-3"
            data-oid="a.jgdh7">

            {description}
          </p>

          {/* Bottom metadata */}
          <div className="flex items-center justify-between" data-oid="1pb62jo">
            <div className="flex items-center space-x-4" data-oid="ua4fy5l">
              {/* Rating */}
              {rating &&
              <div className="flex items-center space-x-1" data-oid="1.-.786">
                  <div className="flex items-center" data-oid="33dhkvl">
                    {[...Array(5)].map((_, i) =>
                  <svg
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(rating) ?
                      "text-accent-gold" :
                      "text-neutral-light-gray"
                    )}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="gl_r0lq">

                        <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      data-oid=".c026tx" />

                      </svg>
                  )}
                  </div>
                  <span
                  className="text-xs text-neutral-medium-gray"
                  data-oid="1w92i_j">

                    {rating.toFixed(1)}
                  </span>
                </div>
              }

              {/* Students count */}
              {studentsCount &&
              <div className="flex items-center space-x-1" data-oid="kmk-8ng">
                  <svg
                  className="w-4 h-4 text-neutral-medium-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="uex3cq4">

                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    data-oid="nk0f9uw" />

                  </svg>
                  <span
                  className="text-xs text-neutral-medium-gray"
                  data-oid="tzyd043">

                    {studentsCount.toLocaleString()} estudantes
                  </span>
                </div>
              }
            </div>

            {/* Favorite button */}
            <button
              className="p-2 text-neutral-medium-gray hover:text-accent-coral transition-colors rounded-regen hover:bg-neutral-light-gray dark:hover:bg-neutral-medium-gray/20"
              data-oid="dw2-3r5">

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="bw-zw93">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  data-oid="j2uoi28" />

              </svg>
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>);

}