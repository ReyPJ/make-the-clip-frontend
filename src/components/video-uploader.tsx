import { useCallback, useRef, useState } from 'react'
import { Cloud, FileVideo, Film, Sparkles, Upload, X } from 'lucide-react'
import * as motion from 'motion/react-client'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface VideoUploaderProps {
  onUpload?: (file: File) => void
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function VideoUploader({ onUpload }: VideoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile)
    }
  }, [])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0]
      if (selectedFile) {
        setFile(selectedFile)
      }
    },
    [],
  )

  const handleUpload = useCallback(() => {
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          onUpload?.(file)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }, [file, onUpload])

  const handleRemoveFile = useCallback(() => {
    setFile(null)
    setUploadProgress(0)
    setIsUploading(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [])

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <motion.div
      className="mx-auto w-full max-w-2xl"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative overflow-hidden border-2 border-dashed border-violet-500/30 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
        {/* Animated gradient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-20 -top-20 size-40 rounded-full bg-violet-500/10 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 size-40 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </div>

        <CardContent className="relative p-8">
          {!file ? (
            <div
              className={`relative cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-all duration-300 ${
                isDragging
                  ? 'border-violet-500 bg-violet-500/10 scale-[1.02]'
                  : 'border-muted-foreground/20 hover:border-violet-500/50 hover:bg-muted/50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileSelect}
              />

              <motion.div
                className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400"
                animate={
                  isDragging ? { scale: [1, 1.1, 1], rotate: [-5, 5, -5] } : {}
                }
                transition={{ duration: 0.3 }}
              >
                {isDragging ? (
                  <Cloud className="size-10" />
                ) : (
                  <Upload className="size-10" />
                )}
              </motion.div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {isDragging ? 'Drop your video here' : 'Upload your video'}
              </h3>
              <p className="mb-4 text-muted-foreground">
                Drag and drop or{' '}
                <span className="text-violet-600 underline underline-offset-2 dark:text-violet-400">
                  browse files
                </span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <Badge
                  variant="outline"
                  className="border-muted-foreground/20 text-muted-foreground"
                >
                  <Film className="mr-1.5 size-3" />
                  MP4
                </Badge>
                <Badge
                  variant="outline"
                  className="border-muted-foreground/20 text-muted-foreground"
                >
                  <Film className="mr-1.5 size-3" />
                  MOV
                </Badge>
                <Badge
                  variant="outline"
                  className="border-muted-foreground/20 text-muted-foreground"
                >
                  <Film className="mr-1.5 size-3" />
                  AVI
                </Badge>
                <Badge
                  variant="outline"
                  className="border-muted-foreground/20 text-muted-foreground"
                >
                  <Film className="mr-1.5 size-3" />
                  WEBM
                </Badge>
              </div>

              <p className="mt-4 text-sm text-muted-foreground/60">
                Maximum file size: 2GB
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* File preview */}
              <div className="flex items-start gap-4 rounded-xl bg-muted/50 p-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400">
                  <FileVideo className="size-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-foreground">
                    {file.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                {!isUploading && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={handleRemoveFile}
                  >
                    <X className="size-5" />
                  </Button>
                )}
              </div>

              {/* Progress bar */}
              {isUploading && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Uploading...</span>
                    <span className="font-medium text-violet-600 dark:text-violet-400">
                      {Math.min(100, Math.round(uploadProgress))}%
                    </span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </motion.div>
              )}

              {/* Upload button */}
              {!isUploading && uploadProgress < 100 && (
                <Button
                  size="lg"
                  className="group relative w-full gap-2 overflow-hidden bg-violet-600 text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-600/40"
                  onClick={handleUpload}
                >
                  <span className="absolute inset-0 bg-linear-to-r from-violet-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  <Sparkles className="size-5" />
                  Generate Clips with AI
                </Button>
              )}

              {/* Success state */}
              {uploadProgress >= 100 && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Badge className="gap-2 bg-emerald-500/10 px-4 py-2 text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="size-4" />
                    Processing your video...
                  </Badge>
                </motion.div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Helper text */}
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Your video will be processed securely and clips will be ready in minutes
      </p>
    </motion.div>
  )
}
