Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("C:\Users\Tran Gia Thieu\Downloads\project Logist\LogisQuest_LuatChoi_v6.docx")
$entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

# Keep text in w:t tags
# Let's write a regex to find all <w:t>contents</w:t>
$matches = [regex]::Matches($xmlText, '<w:t.*?>(.*?)</w:t>')
$text = ($matches | ForEach-Object { $_.Groups[1].Value }) -join " "

$text | Out-File -FilePath "C:\Users\Tran Gia Thieu\.gemini\antigravity-ide\scratch\quychien-landing\luat_choi.txt" -Encoding utf8
