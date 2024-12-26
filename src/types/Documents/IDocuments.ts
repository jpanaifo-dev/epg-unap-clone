export type IDocument = {
    id:          number;
    description: string;
    file:        string;
    is_active:   boolean;
    uploaded_at: Date;
    category:    IDocumentCategory;
}

export type IDocumentCategory = {
    id:          number;
    description: string;
    is_active:   boolean;
}


export type IDocumentFilters = {
    description?: string
    categoryName?: string
    category_id?: IDocumentCategory
}

export type IDocCategoryFilters = {
    id?: number
    description?: string
}
