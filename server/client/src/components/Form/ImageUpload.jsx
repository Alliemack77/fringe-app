
export default function ImageUpload() {

    
    return (
        <div className="form-control">
            <label htmlFor="image">Upload an image</label>
            <input
                id="image"
                name="image"
                type="file"
            />
        </div>
    )
}